from typing import Optional, Tuple
from api.database.connection import get_session
from api.models.schemas import UserCreate, User, UserBase
from api.services.users_service import UsersService


class UsersUtility:

    def __init__(self):
        self.users = UsersService()
        self.session_maker = get_session

    def create_user_email(
            self,
            password: str,
            email: str
    ) -> Tuple[Optional[UserCreate], str]:

        try:
            with self.session_maker() as session:

                results, msg = self.users.create_user(
                    password=password,
                    email=email,
                    db=session
                )

                if not results:
                    session.rollback()
                    return None, msg

                session.expunge(results)

                return results, msg

        except Exception as e:
            return None, str(e)


