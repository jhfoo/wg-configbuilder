# community
from fastapi import APIRouter

# custom
from src.classes.Wireguard import Wireguard

router = APIRouter()


@router.get('/status')
async def testShell():
  return await Wireguard.getStatus()

@router.get('/config')
async def testShell():
  return await ConfigMgr.getStatus()


