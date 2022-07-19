from fastapi import HTTPException
from fastapi import APIRouter

router = APIRouter()


@router.get('/')
async def home():
    try:
        pass
    except Exception as e:
        msg = str(e)
        raise HTTPException(status_code=404, detail=msg)
