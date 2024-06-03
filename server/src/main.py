# core
import asyncio
import subprocess
from typing import Union

# community
import uvicorn
from fastapi import FastAPI, Response
from yaml import Loader, Dumper
import yaml

# custom
from src.classes.Wireguard import Wireguard

app = FastAPI()

@app.get("/")
def read_root():
  return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
  return {"item_id": item_id, "q": q}

@app.get('/api/wireguard/status')
async def testShell():
  return await Wireguard.getStatus()

if __name__ == "__main__":
  uvicorn.run("main:app", port=8000, host='0.0.0.0', log_level="info")