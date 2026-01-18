from sqlmodel import SQLModel, create_engine, metadata
from .models import Todo
from .config import sqlite_url


# Create the motor using the configuration
engine = create_engine(sqlite_url, echo=True)


def init_db():
    #Metadata is an array
    SQLModel.metadata.create_all(engine)