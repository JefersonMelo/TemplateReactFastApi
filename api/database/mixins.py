from sqlalchemy import Column, DateTime, String, func


class CreationMixin(object):
    Created = Column(DateTime, name='Created', server_default=func.now())
    Created_By = Column(String(255), name='Created_By', nullable=False)


class DeletionMixin(object):
    Deleted = Column(DateTime, name='Deleted', nullable=True)
    Deleted_By = Column(String(255), name='Deleted_By', nullable=True)


class ModificationMixin(object):
    Modified = Column(DateTime, name='Modified', nullable=True)
    Modified_By = Column(String(255), name='Modified_By', nullable=True)
