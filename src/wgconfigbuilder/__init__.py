# community
from pydantic import BaseModel
from typing import Dict, Optional

__version__ = '0.0.3'

class ServerConfig(BaseModel):
  Address: str
  Endpoint: str
  ListenPort: int
  PersistentKeepalive: int
  DNS: str
  PublicKey: str
  PrivateKey: str

class PeerConfig(BaseModel):
  PublicKey: Optional[str] = None
  PrivateKey: Optional[str] = None
  Address: Optional[str] = None

class FullConfig(BaseModel):
  server: ServerConfig
  peers: Dict[str, PeerConfig]

class Builder:
  @classmethod
  def build2Path(self, config: FullConfig):
    print (f"{self.formatServerConfig(config)}")
    return config

  @classmethod
  def formatServerConfig(self, config):
    ret = f"""[Interface]
Address = {config.server.Address}
ListenPort = {config.server.ListenPort}
PrivateKey = {config.server.PrivateKey}
"""
    for PeerId in config.peers:
      peer = config.peers[PeerId]
      ret += f"""
[Peer]
PublicKey = {peer.PublicKey}
AllowedIPs = {peer.Address}
"""

    return ret