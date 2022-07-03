from typing import Optional, Tuple
from api.database.connection import get_session
from api.models.schemas import ItemCreate, Item
from api.services.items_service import ItemsService


class ItemsUtility:

    def __init__(self):
        self.items = ItemsService()
        self.session_maker = get_session

    def create_item_for_user(
            self,
            user_id: int,
            item: ItemCreate
    ) -> Tuple[Optional[ItemCreate], str]:

        try:
            with self.session_maker() as session:

                results, msg = self.items.create_item_user(
                    user_id=user_id,
                    item=item,
                    db=session
                )

                if not results:
                    session.rollback()
                    return None, msg

                session.expunge_all()

                return results, msg

        except Exception as e:
            return None, str(e)


