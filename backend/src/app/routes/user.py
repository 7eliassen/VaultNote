from typing import Annotated, List
from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from app.schemas.user import User as UserDB
from app.models.user import User
from app.database import SessionDep, get_session
from app.auth import get_current_active_user, get_password_hash
from app.models.user import User_userinfo

router = APIRouter(tags=["users"])

@router.post("/users/")
def create_user(user: User, session: Session = Depends(get_session)):
    hashed_password = get_password_hash(user.password)
    new_user = UserDB(username=user.username, password_hashed=hashed_password)
    session.add(new_user)
    session.commit()
    session.refresh(new_user)
    return new_user

@router.get("/users/")
def list_users(session: Session = Depends(get_session)):
    users = session.exec(select(UserDB)).all()
    return users

@router.get("/users/me/")
def read_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)]
):
    user_info = User_userinfo(
        username=current_user.username,
        disabled=current_user.disabled
    )
    return user_info
