from uuid import uuid4 as uuid
from sqlmodel import Field, SQLModel
from enum import Enum


# Enums
class Status(str, Enum):
    pending = "pending"
    completed = "completed"



# Validations

class Task(SQLModel):
    description: str | None = None

class Task_update(SQLModel):
    description: str | None = None
    status: Status




# Database
class Todo(SQLModel, table=True):
    id: str | None = Field(default_factory=lambda: str(uuid()), primary_key=True, nullable=False)
    description: str | None = None
    status: Status = Field(default=Status.pending)
