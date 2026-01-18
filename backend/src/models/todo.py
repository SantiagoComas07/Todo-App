from uuid import uuid4 as uuid
from sqlmodel import Field, SQLModel
from enum import Enum


#class Hero(SQLModel, table=True):
    # id: Optional[int] = Field(default=None, primary_key=True)
    # name: str
    # secret_name: str
    # age: Optional[int] = None

class Status(str, Enum):
    pending = "pending"
    completed = "completed"


class Todo(SQLModel, table=True):
    id: int | None = Field(default_factory=uuid, primary_Key=True, nullable=False)
    description = str | None = None
    status = Status = Field(default=Status.pending)
