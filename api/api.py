from typing import Optional
from fastapi import HTTPException
from .utilities.items_utility import ItemsUtility
from .utilities.users_utility import UsersUtility
from .models.schemas import UserCreate, ItemCreate
from fastapi import APIRouter

api = APIRouter(prefix='/api')


@api.get('/', tags=['home'])
async def home():
    try:
        pass
    except Exception as e:
        msg = str(e)
        raise HTTPException(status_code=404, detail=msg)


