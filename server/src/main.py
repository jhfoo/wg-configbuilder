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
from src.classes.WireguardStatus import WireguardStatus

app = FastAPI()

async def doShellCmd(cmd):
  process = await asyncio.create_subprocess_shell(
    cmd,
    stdout = subprocess.PIPE,
    stderr = subprocess.PIPE
  )

  stdout, stderr = await process.communicate()
  print (f"process.returncode: {process.returncode}")
  interfaces = WireguardStatus.parseWgShow(stdout.decode('utf-8'))

  ret = []
  for interface in interfaces:
    ret.append(interface)
  print (f"stderr: {stderr.decode('utf-8')}")

  return ret

@app.get("/")
def read_root():
  return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
  return {"item_id": item_id, "q": q}

@app.get('/api/wireguard/status')
async def testShell():
  return await doShellCmd('wg show')

if __name__ == "__main__":
  uvicorn.run("main:app", port=8000, host='0.0.0.0', log_level="info")