from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from src.db import init_db
from src.models import Task, Task_update
from src.crud import create_task, get_all_tasks, find_task, update_task, delete_task
from uuid import UUID



# Initialize -- create_all
@asynccontextmanager
async def lifespan(app:FastAPI):
    init_db()
    yield


app = FastAPI(lifespan=lifespan)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # URLs del frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get('/')
def root():
    return {"message": "Hello world"}


@app.get('/tasks')
def get_tasks():
    return get_all_tasks()

@app.post('/tasks')
def create_task_todo(todo: Task):
    return create_task(todo)

@app.get('/tasks/{task_id}')
def get_task_by_id(task_id: UUID):
    task_id = str(task_id)
    return find_task(task_id)


@app.put('/tasks/{task_id}')
def update_task_by_id(task_id: UUID, data:Task_update):
    task_id = str(task_id)
    return update_task(task_id, data)

@app.delete('/tasks/{task_id}')
def delete_task_by_id(task_id: UUID):
    task_id = str(task_id)
    return delete_task(task_id)
  