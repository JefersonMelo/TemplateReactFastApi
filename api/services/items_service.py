from typing import Optional, Tuple
from sqlalchemy.orm import Session
from api.models.schemas import ItemCreate
from api.database.models import Item


class ItemsService:

    @classmethod
    def create_item_user(
            cls,
            user_id: int,
            item: ItemCreate,
            db: Session
    ) -> Tuple[Optional[Item], str]:

        try:

            results = Item(**item.dict(), owner_id=user_id)

            if not results:
                db.rollback()
                return None, 'Error'

            db.add(results)

            db.commit()

            db.refresh(results)

            return results, 'Success'

        except Exception as e:
            return None, str(e)

    @classmethod
    def get_items(
            cls,
            db: Session,
            skip: int,
            limit: int
    ) -> Tuple[Optional[Item], str]:

        try:

            results = db.query(Item).offset(skip).limit(limit).all()

            if not results:
                return None, 'Error'

            return results, 'Success'

        except Exception as e:
            return None, str(e)
