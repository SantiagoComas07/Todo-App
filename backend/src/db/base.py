from sqlmodel import Session


class BaseRepository:
    def __init__(self, session: Session):
        self.sesion = session
    def add(self, obj):
        self.session.add(obj)
        self.session.commit()
        self.session.refresh(obj)
        return obj
    def delete(self, obj):
        self.session.delete(obj)
        self.session.commit()
    def update(self, obj, data:dict):
        obj.sqlmodel.update(data)
        self.session.add(obj)
        self.session.commit()
        self.session.refresh()
        return obj