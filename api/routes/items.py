from typing import Optional
from fastapi import HTTPException

from ..utilities.items_utility import ItemsUtility
from ..models.schemas import ItemCreate
from fastapi import APIRouter

router = APIRouter()


@router.post('/users/{user_id}/items/')
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


@router.get('/items/')
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
