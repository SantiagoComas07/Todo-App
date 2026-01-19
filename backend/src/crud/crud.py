from fastapi import HTTPException
from sqlmodel import Session, select
from ..models import Todo, Task
from ..db import engine
from sqlalchemy.exc import SQLAlchemyError


# Create 

def create_task(task:Task):
    # Unpackage objetc
    db_task = Todo(**task.model_dump())

    with Session(engine) as session:
        try:
            session.add(db_task)
            session.commit()
            session.refresh(db_task)
            return {"message": "The task has been successfully created", "task": db_task}  
        except  SQLAlchemyError as e:
            session.rollback()
            print(f"Error in database process {e}")
            raise HTTPException(
                status_code=400,
                detail= "Error in the query"
            )


def get_all_tasks():
    with Session(engine) as session:
        try:
            statement = select(Todo)
            result = session.exec(statement)
            task = result.all()
            return task
        except:
            print(f"Error in database process")
            raise HTTPException(
                status_code=500,
                detail= "Error in get the Tasks"
            )


def find_task(task_id):
    with Session(engine) as session:
        try:
            task = session.get(Todo, task_id)
            return task
        except:
            raise HTTPException(
                status_code=404,
                detail="The element didn't found"
            )


def update_task(task_id, data):
 with Session(engine) as session:
    try:
        result = find_task(task_id)
        if not result:
            return None
        
        # extratc new changes
        new_data = data.model_dump(exclude_unset=True)
        # update the data in the database
        result.sqlmodel_update(new_data)
        session.add(result)
        session.commit()
        session.refresh(result)

        return result
    except SQLAlchemyError as e:
        session.rollback()
        print(f"Error in put process: {e}")
        raise HTTPException(
            status_code=400,
            detail= "Error in the query in put process"
        )
    


def delete_task(task_id):
 with Session(engine) as session:
    try:
        result = find_task(task_id)
        if not result:
            return None
        session.delete(result)
        session.commit()
        return {"message": "The Task has been deleted successfully"}
    except SQLAlchemyError as e:
        session.rollback()
        print(f"Error in put process: {e}")
        raise HTTPException(
            status_code=404,
            detail= "Error in the query in delete process"
        )