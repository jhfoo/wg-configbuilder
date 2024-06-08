# core
import asyncio
import subprocess
from typing import Union

# community
import uvicorn
from fastapi import FastAPI, Response
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from yaml import Loader, Dumper
from pydantic import BaseModel
import yaml

# custom
from src.classes.Wireguard import Wireguard
from src.classes.ConfigMgr import ConfigMgr

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

@app.get('/api/wireguard/status')
async def testShell():
  return await Wireguard.getStatus()

@app.get('/api/wireguard/config')
async def testShell():
  return await ConfigMgr.getStatus()

class ConfigPath(BaseModel):
  path: str

@app.get('/api/config/path')
async def getPath():
  AppConfig = ConfigMgr.getAppConfig()
  return AppConfig['WireguardConfig'] if 'WireguardConfig' in AppConfig else ''

@app.post('/api/config/path')
async def savePath(config: ConfigPath):
  return ConfigMgr.saveConfigPath(config.path)

@app.post('/api/config/path/test')
async def testPath(config: ConfigPath):
  return ConfigMgr.testConfigPath(config.path)

app.mount("/", StaticFiles(directory="public", html=True), name="public")

if __name__ == "__main__":
  uvicorn.run("main:app", port=8000, host='0.0.0.0', log_level="info")
