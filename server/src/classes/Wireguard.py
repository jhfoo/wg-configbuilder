# core
import asyncio
import subprocess

# custom
from src.classes.WireguardStatus import WireguardStatus

async def doShellCmd(cmd):
  process = await asyncio.create_subprocess_shell(
    cmd,
    stdout = subprocess.PIPE,
    stderr = subprocess.PIPE
  )

  stdout, stderr = await process.communicate()
  print (f"process.returncode: {process.returncode}")
  interfaces = WireguardStatus.parseWgShow(stdout.decode('utf-8'))

  print (f"stderr: {stderr.decode('utf-8')}")

  return interfaces


class Wireguard:
  @classmethod
  async def getStatus(self):
    return await doShellCmd('wg show')
