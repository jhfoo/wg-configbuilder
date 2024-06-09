# community
from fastapi import APIRouter
from pydantic import BaseModel

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
