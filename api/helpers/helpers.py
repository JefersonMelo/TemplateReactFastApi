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

    @classmethod
    def date_utc_3(cls, date: datetime) -> Tuple[Optional[datetime], str]:
        try:

            t_delta = timedelta(hours=-3)
            utc_3 = timezone(t_delta)
            date.astimezone(utc_3)

            if not date:
                return None, 'Erro ao Ajustar data'

            return date, 'Date Belezinha'

        except Exception as e:
            return None, str(e)

    @classmethod
    def clear_cpf(cls, cpf: str) -> Tuple[Optional[str], str]:
        try:

            return re.sub('[^0-9]', '', cpf), 'Belezinha'

        except Exception as e:
            return None, str(e)

    @classmethod
    def capitalize(cls, text: str) -> Tuple[Optional[str], str]:
        try:

            return text.upper(), 'Belezinha'

        except Exception as e:
            return None, str(e)
