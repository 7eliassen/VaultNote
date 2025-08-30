from fastapi import FastAPI
from app.routes.user import router as router_user
from app.auth import router as router_auth
from app.routes.notes import router as router_notes
from app.database import create_db_and_tables
from app.schemas.user import User
from app.database import *
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.include_router(router_auth)
app.include_router(router_user)
app.include_router(router_notes)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешаем React
    allow_credentials=True,
    allow_methods=["*"],  # Разрешаем все методы (GET, POST и т.д.)
    allow_headers=["*"],  # Разрешаем все заголовки
)


@app.get("/hello")
async def root():
    return {"message": "Hello World"}


create_db_and_tables()
