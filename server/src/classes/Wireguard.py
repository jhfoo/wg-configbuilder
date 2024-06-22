# core
import asyncio
import subprocess

# community
from pydantic import BaseModel
from typing import Dict, Optional
import yaml
try:
  from yaml import CLoader as Loader, CDumper as Dumper
except ImportError:
  from yaml import Loader, Dumper

# custom
import src.classes.ConfigMgr as ConfigMgrPkg
from src.classes.ConfigMgr import ConfigMgr
from src.classes.WireguardStatus import WireguardStatus
# from wgconfigbuilder import FullConfig


class ShellResponse(BaseModel):
  stdout: str
  stderr: str
  ReturnCode: int

async def doShellCmd(cmd):
  process = await asyncio.create_subprocess_shell(
    cmd,
    stdout = subprocess.PIPE,
    stderr = subprocess.PIPE
  )

  stdout, stderr = await process.communicate()

  return ShellResponse(
    stdout = stdout.decode('utf-8').strip(),
    stderr = stderr.decode('utf-8'),
    ReturnCode = process.returncode
  )

class Wireguard:
  @classmethod
  async def getStatus(self):
    resp = await doShellCmd('wg show')

    print (f"process.returncode: {resp.ReturnCode}")
    interfaces = WireguardStatus.parseWgShow(resp.stdout)

    print (f"stderr: {stderr}")

    return interfaces

  @classmethod
  async def generateKeys(self, TestPrivateKey : str = None):
    if TestPrivateKey:
      PrivateKey = TestPrivateKey
    else:
      cmd = 'wg genkey'
      resp = await doShellCmd(cmd)
      if resp.ReturnCode != 0:
        raise Exception(f"ERROR: (doShellCmd) {cmd}")
      PrivateKey = resp.stdout
      # print (f"PrivateKey: {PrivateKey}")

    cmd = f"echo '{PrivateKey}' | wg pubkey"
    resp = await doShellCmd(cmd)
    if resp.ReturnCode != 0:
      raise Exception(f"ERROR: (doShellCmd) {cmd} - {resp.stderr}")
    PublicKey = resp.stdout
    # print (f"PublicKey: {PublicKey}")

    return PrivateKey, PublicKey

  @classmethod
  async def autoSetKeys(self, obj):
    if not ConfigMgrPkg.KEY_PRIVATE_KEY in obj \
      or not obj[ConfigMgrPkg.KEY_PRIVATE_KEY]:
      PrivateKey, PublicKey = await self.generateKeys()
      obj[ConfigMgrPkg.KEY_PRIVATE_KEY] = PrivateKey
      obj[ConfigMgrPkg.KEY_PUBLIC_KEY] = PublicKey

    return True

  @classmethod
  async def saveConfig(self, NewConfig):
    ConfigFname = ConfigMgr.getWireguardFname()
    with open(ConfigFname,'r') as infile:
      WgConfig = yaml.load(infile.read(), Loader = Loader)

    WgConfig[ConfigMgrPkg.KEY_SERVER] = NewConfig.server.__dict__

    # default to 51820
    ListenPort = NewConfig.server.ListenPort or 51820
    WgConfig[ConfigMgrPkg.KEY_SERVER][ConfigMgrPkg.KEY_LISTEN_PORT] = ListenPort

    # default to 30
    PersistentKeepalive = NewConfig.server.PersistentKeepalive or 30
    WgConfig[ConfigMgrPkg.KEY_SERVER][ConfigMgrPkg.KEY_CLIENT_DEFAULT_KEEPALIVE] = PersistentKeepalive

    # write peers
    WgConfig[ConfigMgrPkg.KEY_PEERS] = {}
    for PeerId in NewConfig.peers.keys():
      WgConfig[ConfigMgrPkg.KEY_PEERS][PeerId] = {}
      WgConfig[ConfigMgrPkg.KEY_PEERS][PeerId] = NewConfig.peers[PeerId].__dict__
      PeerDict = WgConfig[ConfigMgrPkg.KEY_PEERS][PeerId]
      print (f"PeerDict: {PeerDict}")
      await self.autoSetKeys(PeerDict)

    with open(ConfigFname,'w') as outfile:
      outfile.write(yaml.dump(WgConfig, Dumper = Dumper))

    print (f"Final WgConfig: {WgConfig}")

  @classmethod
  async def getConfig(self):
    ConfigFname = ConfigMgr.getWireguardFname()
    with open(ConfigFname,'r') as infile:
      WgConfig = yaml.load(infile.read(), Loader = Loader)
    
    if WgConfig is None:
      WgConfig = {}

    if not ConfigMgrPkg.KEY_SERVER in WgConfig:
      WgConfig[ConfigMgrPkg.KEY_SERVER] = {}

    # auto generate server keys
    await self.autoSetKeys(WgConfig[ConfigMgrPkg.KEY_SERVER])

    # auto generate peer keys
    for PeerId in WgConfig[ConfigMgrPkg.KEY_PEERS]:
      peer = WgConfig[ConfigMgrPkg.KEY_PEERS][PeerId]
      await self.autoSetKeys(peer)
      
    if (not ConfigMgrPkg.KEY_PEERS in WgConfig) or (WgConfig[ConfigMgrPkg.KEY_PEERS] is None):
      WgConfig[ConfigMgrPkg.KEY_PEERS] = {}

    return WgConfig
