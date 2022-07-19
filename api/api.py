from fastapi import APIRouter
from .enums.tags_enum import Tags
from .routes import home, items, users

api = APIRouter()

api.include_router(home.router, prefix='/home', tags=[Tags.Home])
api.include_router(items.router, prefix='/items', tags=[Tags.Items])
api.include_router(users.router, prefix='/users', tags=[Tags.Users])
