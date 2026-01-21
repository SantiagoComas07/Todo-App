from sqlmodel import Session


class BaseRepository:
    def __init__(self, session: Session):
        self.sesion = session
    def add(self, obj):
        self.sesion.add(obj)
        self.sesion.commit()
        self.sesion.refresh(obj)
        return obj
    def delete(self, obj):
        self.sesion.delete(obj)
        self.sesion.commit()
    def update(self, obj, data:dict):
        for key, value in data.items():
            setattr(obj, key, value)
        self.sesion.add(obj)
        self.sesion.commit()
        self.sesion.refresh(obj)
        return obj