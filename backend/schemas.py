from pydantic import BaseModel
from typing import Optional


class TodoBase(BaseModel):
    text: str
    completed: bool = False


class TodoCreate(TodoBase):
    pass


class Todo(TodoBase):
    id: int

    class Config:
        from_attributes = True
