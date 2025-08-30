from typing import Union
from pydantic import BaseModel

class User(BaseModel):
    username: str 
    password: str

class User_userinfo(BaseModel):
    username: str
    disabled: bool