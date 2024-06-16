# community
from fastapi import APIRouter
from pydantic import BaseModel
from typing import Dict

# custom
from src.classes.ConfigMgr import ConfigMgr

router = APIRouter()

class ConfigPath(BaseModel):
  path: str

@router.get('/path')
async def getPath():
  AppConfig = ConfigMgr.getAppConfig()
  return AppConfig['WireguardConfig'] if 'WireguardConfig' in AppConfig else ''

@router.post('/path')
async def savePath(config: ConfigPath):
  return ConfigMgr.saveConfigPath(config.path)

@router.post('/path/test')
async def testPath(config: ConfigPath):
  return ConfigMgr.testConfigPath(config.path)

class ServerConfig(BaseModel):
  Address: str
  Endpoint: str
  ListenPort: int
  PersistentKeepalive: int
  DNS: str

class PeerConfig(BaseModel):
  Address: str

class FullConfig(BaseModel):
  server: ServerConfig
  peers: Dict[str, PeerConfig]

@router.get('/')
async def getConfig():
  return ConfigMgr.getWireguardConfig()

@router.post('/')
async def saveConfig(NewConfig: FullConfig):
  OrigConfig = ConfigMgr.getWireguardConfig()
  print (OrigConfig)
  print (NewConfig)
  ConfigMgr.saveWireguardConfig(NewConfig)
  pass