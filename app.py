from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.middleware.cors import CORSMiddleware
from api.api import api
from fastapi import FastAPI, Request

# App Instance
app = FastAPI()

# Register Api Routers
app.include_router(api)

# Cors support - Api open to public
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

# Gzip compression support
app.add_middleware(GZipMiddleware)

# Show React build files
app.mount('/static', StaticFiles(directory='app/build/static'), name='static')
templates = Jinja2Templates(directory='app/build')
