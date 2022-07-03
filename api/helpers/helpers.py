from datetime import datetime, timezone
from pydantic.datetime_parse import timedelta
from typing import Optional, Tuple
import re


class FormatHelper:
    @classmethod
    def date_format(cls, date: datetime) -> Tuple[Optional[str], str]:
        try:
            date = datetime.strftime(date, '%d/%m/%Y')

            if not date:
                return None, 'Erro ao Ajustar data'

            return date, 'Data Belezinha'

        except Exception as e:
            return None, str(e)

