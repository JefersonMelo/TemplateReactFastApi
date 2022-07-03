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

    @classmethod
    def get_user_id(
            cls,
            db: Session,
            user_id: int,
    ) -> Tuple[Optional[User], str]:

        try:

            results = db.query(User).filter(User.id == user_id).first()

            if not results:
                return None, 'Error'

            return results, 'Success'

        except Exception as e:
            return None, str(e)

    @classmethod
    def get_user_email(
            cls,
            db: Session,
            email: str,
    ) -> Tuple[Optional[User], str]:

        try:

            results = db.query(User).filter(User.email == email).first()

            if not results:
                return None, 'Error'

            return results, 'Success'

        except Exception as e:
            return None, str(e)


