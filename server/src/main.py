# core
import asyncio
import subprocess
from typing import Union
import sys

# community
import uvicorn
from fastapi import FastAPI, Response
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from yaml import Loader, Dumper
import yaml

sys.path.insert(0, '../src')
# custom
from src.classes.ConfigMgr import ConfigMgr
import src.routes.RouteWireguard as RouteWireguard
import src.routes.RouteConfig as RouteConfig
import wgconfigbuilder

app = FastAPI()

origins = [
  '*'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
  return {"item_id": item_id, "q": q}

app.include_router(RouteWireguard.router, prefix = '/api/wireguard')
app.include_router(RouteConfig.router, prefix = '/api/config')
app.mount("/", StaticFiles(directory="public", html=True), name="public")

if __name__ == "__main__":
  uvicorn.run("main:app", port=8000, host='0.0.0.0', log_level="info")
