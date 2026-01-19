from sqlmodel import SQLModel, create_engine
from ..config import sqlite_url
from ..models import Todo


# Create the motor using the configuration
engine = create_engine(sqlite_url, echo=True, connect_args={"check_same_thread": False})

def init_db():
    #Metadata is an array
    SQLModel.metadata.create_all(engine)
    print("Database connected and ready")



