import uuid
from sqlmodel import UUID, Field, SQLModel


class NoteDB(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    title: str = Field(nullable=False)
    content: str
    user_id: int = Field(foreign_key="user.id", nullable=False)

