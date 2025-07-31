from fastapi import FastAPI
from app.routes.user import router as router_user
from app.auth import router as router_auth
from app.routes.notes import router as router_notes
from app.database import create_db_and_tables
from app.schemas.user import User
from app.database import *
app = FastAPI()

app.include_router(router_auth)
app.include_router(router_user)
app.include_router(router_notes)

create_db_and_tables()
