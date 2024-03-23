# core
from typing import Optional

# community
from pydantic import BaseModel

# custom
import wgconfigbuilder.llib.util as util

class Peer(BaseModel):
  id: str
  AllowedIPs: str = None
  Address: str
  PublicKey: Optional[str] = None
  PrivateKey: Optional[str] = None
  MyIPs: Optional[str] = []

def getModel(PeerId, config):
  peer = Peer(
    id = PeerId,
    Address = config[util.KEY_ADDRESS]
  )
  peer.AllowedIPs = config[util.KEY_PEER_ALLOWED_IPS] if util.KEY_PEER_ALLOWED_IPS in config else '0.0.0.0/0'

  if util.KEY_PUBLIC_KEY in config:
    peer.PublicKey = config[util.KEY_PUBLIC_KEY]
  if util.KEY_PRIVATE_KEY in config:
    peer.PrivateKey = config[util.KEY_PRIVATE_KEY]
  if util.KEY_PEER_MY_IPS in config:
    peer.MyIPs = config[util.KEY_PEER_MY_IPS]

  return peer