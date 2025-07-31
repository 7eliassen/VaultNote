from sqlmodel import SQLModel, Field

class User(SQLModel, table=True):
    id: int | None = Field(primary_key=True, unique=True)
    username: str = Field(unique=True, index=True)
    password_hashed: str
    disabled: bool = Field(default=False)
