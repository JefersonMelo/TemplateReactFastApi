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


@api.post('/user/', tags=['users'])
async def create_user(user: Optional[UserCreate] = None):
    try:
        users = UsersUtility()

        results, msg = users.create_user_email(password=user.password, email=user.email)

        if not results:
            return HTTPException(status_code=400, detail=msg)

        return {'detail': results, 'msg': msg}

    except Exception as e:
        msg = str(e)
        raise HTTPException(status_code=400, detail=msg)


@api.get('/all/users/', tags=['users'])
async def get_all_users():
    try:
        users = UsersUtility()

        results, msg = users.get_all_users(skip=0, limit=100)

        if not results:
            return HTTPException(status_code=400, detail=msg)

        return {'detail': results, 'msg': msg}

    except Exception as e:
        msg = str(e)
        raise HTTPException(status_code=400, detail=msg)


@api.get('/user/{user_id}', tags=['users'])
async def get_user(user_id: int):
    try:
        users = UsersUtility()

        results, msg = users.get_user(user_id=user_id)

        if not results:
            return HTTPException(status_code=400, detail=msg)

        return {'detail': results, 'msg': msg}

    except Exception as e:
        msg = str(e)
        raise HTTPException(status_code=400, detail=msg)


@api.get('/user/email/{user_email}', tags=['users'])
async def get_user_by_email(email: str):
    try:
        users = UsersUtility()

        results, msg = users.get_user_by_email(email=email)

        if not results:
            return HTTPException(status_code=400, detail=msg)

        return {'detail': results, 'msg': msg}

    except Exception as e:
        msg = str(e)
        raise HTTPException(status_code=400, detail=msg)


@api.post('/users/{user_id}/items/', tags=['items'])
async def create_item_for_user(user_id: int, item: Optional[ItemCreate]):
    try:
        items = ItemsUtility()

        results, msg = items.create_item_for_user(user_id=user_id, item=item)

        if not results:
            return HTTPException(status_code=400, detail=msg)

        return {'detail': results, 'msg': msg}

    except Exception as e:
        msg = str(e)
        raise HTTPException(status_code=400, detail=msg)


@api.get('/items/', tags=['items'])
def get_all_items():
    try:
        items = ItemsUtility()

        results, msg = items.get_all_items(skip=0, limit=100)

        if not results:
            return HTTPException(status_code=400, detail=msg)

        return {'detail': results, 'msg': msg}

    except Exception as e:
        msg = str(e)
        raise HTTPException(status_code=400, detail=msg)
