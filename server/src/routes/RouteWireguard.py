# community
from fastapi import APIRouter

# custom
from src.classes.Wireguard import Wireguard
import wgconfigbuilder
from wgconfigbuilder import FullConfig

router = APIRouter()


@router.get('/status')
async def testShell():
  return await Wireguard.getStatus()

@router.get('/config')
async def testShell():
  return await ConfigMgr.getStatus()

@router.get('/genkeys')
async def generateKeys(key : str = None):
  PrivateKey, PublicKey = await Wireguard.generateKeys(key)
  return {
    "PublicKey": PublicKey,
    "PrivateKey": PrivateKey
  }

@router.get('/')
async def getConfig():
  return await Wireguard.getConfig()

@router.post('/config')
async def saveConfig(NewConfig: FullConfig):
  OrigConfig = await Wireguard.getConfig()
  print (OrigConfig)
  print (NewConfig)
  await Wireguard.saveConfig(NewConfig)
  builder = wgconfigbuilder.Builder.build2Path(NewConfig)
  # print (f"{builder}") 
  # print (f"{builder.server.Address}")
  pass
