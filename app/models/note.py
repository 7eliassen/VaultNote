
from typing import Optional
from sqlmodel import SQLModel
import uuid

class NoteBase(SQLModel):
    title: str
    content: str

class NoteCreate(NoteBase):
    pass

class NoteRead(NoteBase):
    id: uuid.UUID
class NoteUpdate(SQLModel):
    title: Optional[str] = None
    content: Optional[str] = None