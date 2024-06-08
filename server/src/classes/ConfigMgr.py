# core
import asyncio
import subprocess
import os

class ConfigMgr:
  @classmethod
  async def getStatus(self):
    return {}

  @classmethod
  async def testConfigPath(self, path):
    RespStatus = 'unknown'
    RespDescription = ''

    if os.path.isfile(path):
      RespStatus = 'ok'
    else:
      RespStatus = 'error'
      RespDescription = f"Not a file: {path}"

    return {
      'status': RespStatus,
      'description': RespDescription,
      'path': path
    }
