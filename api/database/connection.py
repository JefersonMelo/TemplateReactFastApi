from contextlib import contextmanager
from typing import Generator
from requests import Session
from . import models
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)


@contextmanager
def get_session() -> Generator[Session, None, None]:
    session = SessionLocal()

    try:
        yield session
        session.commit()
    except Exception as e:
        print(e)
        session.rollback()
    finally:
        session.close()
