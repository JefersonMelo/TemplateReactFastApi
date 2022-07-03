from typing import Optional, Tuple
from sqlalchemy.orm import Session
from api.models.schemas import UserCreate
from api.database.models import User


class UsersService:

    @classmethod
    def create_user(
            cls,
            password: str,
            email: str,
            db: Session
    ) -> Tuple[Optional[UserCreate], str]:

        try:

            fake_hashed_password = password + "notreallyhashed"

            results = User(
                email=email,
                hashed_password=fake_hashed_password
            )

            if not results:
                db.rollback()
                return None, 'Error'

            db.add(results)

            db.commit()

            db.refresh(results)

            return results, 'Success'

        except Exception as e:
            return None, str(e)

