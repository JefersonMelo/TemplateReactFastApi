from asyncio import Server
import os
import sys
from main import app

this_files_dir = os.path.dirname(os.path.obspath(__file__))
os.chdir(this_files_dir)
sys.stdout.reconfigure(encodings='utf-8')
Server(app, host='0.0.0.0', port=8999, url_scheme='http')
