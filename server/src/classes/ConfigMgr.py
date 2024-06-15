# core
import asyncio
import subprocess
import os

# community
import yaml
try:
  from yaml import CLoader as Loader, CDumper as Dumper
except ImportError:
  from yaml import Loader, Dumper

FILE_APP_CONFIG = 'conf/app.yaml'
KEY_SERVER = 'server'
KEY_PEERS = 'peers'
KEY_SERVER_ADDRESS = 'ServerAddress'
KEY_SERVER_ENDPOINT = 'Endpoint'
KEY_WIREGUARD_CONFIG = 'WireguardConfig'
KEY_LISTEN_PORT = 'ListenPort'
KEY_CLIENT_DEFAULT_DNS = 'DNS'
KEY_CLIENT_DEFAULT_KEEPALIVE = 'PersistentKeepalive'

class ConfigMgr:
  @classmethod
  async def getStatus(self):
    return {}

  @classmethod
  def saveWireguardConfig(self, NewConfig):
    WgConfig = self.getWireguardConfig()

    WgConfig[KEY_SERVER][KEY_SERVER_ADDRESS] = NewConfig.server.ServerAddress
    WgConfig[KEY_SERVER][KEY_SERVER_ENDPOINT] = NewConfig.server.Endpoint
    WgConfig[KEY_SERVER][KEY_CLIENT_DEFAULT_DNS] = NewConfig.server.dns

    # default to 51820
    ListenPort = NewConfig.server.ListenPort or 51820
    WgConfig[KEY_SERVER][KEY_LISTEN_PORT] = ListenPort

    # default to 30
    PersistentKeepalive = NewConfig.server.PersistentKeepalive or 30
    WgConfig[KEY_SERVER][KEY_CLIENT_DEFAULT_KEEPALIVE] = PersistentKeepalive

    AppConfig = self.getAppConfig()
    with open(AppConfig[KEY_WIREGUARD_CONFIG],'w') as outfile:
      outfile.write(yaml.dump(WgConfig, Dumper = Dumper))

    print (f"Final WgConfig: {WgConfig}")

  @classmethod
  def getWireguardConfig(self):
    AppConfig = self.getAppConfig()
    if AppConfig is None:
      return None

    if not KEY_WIREGUARD_CONFIG in AppConfig:
      return None

    if not os.path.isfile(AppConfig[KEY_WIREGUARD_CONFIG]):
      return None

    with open(AppConfig[KEY_WIREGUARD_CONFIG],'r') as infile:
      WgConfig = yaml.load(infile.read(), Loader = Loader)
    
    if WgConfig is None:
      WgConfig = {}

    if not KEY_SERVER in WgConfig:
      WgConfig[KEY_SERVER] = {}

    if not KEY_PEERS in WgConfig:
      WgConfig[KEY_PEERS] = {}

    return WgConfig

  @classmethod
  def getAppConfig(self):
    if not os.path.isfile(FILE_APP_CONFIG):
      return None

    with open(FILE_APP_CONFIG,'r') as infile:
      config = yaml.load(infile.read(), Loader = Loader)
      if config == None:
        return {}
      # else
      return config

  @classmethod
  def saveAppConfig(self, AppConfig):
    with open(FILE_APP_CONFIG,'w') as outfile:
      outfile.write(yaml.dump(AppConfig, Dumper = Dumper))

  @classmethod
  def saveConfigPath(self, path):
    TestResp = self.testConfigPath(path)
    if TestResp['status'] == 'ok':
      AppConfig = self.getAppConfig()
      print(AppConfig)

      if not KEY_WIREGUARD_CONFIG in AppConfig:
        AppConfig[KEY_WIREGUARD_CONFIG] = ''

      AppConfig[KEY_WIREGUARD_CONFIG] = path
      self.saveAppConfig(AppConfig)

    return 'ok'

  @classmethod
  def testConfigPath(self, path):
    RespStatus = 'unknown'
    RespDescription = ''

    if os.path.isfile(path):
      return {
        'status': 'ok'
      }
    else:
      ret = {
        'status': 'error',
        'description': f"Not a file: {path}"
      }

      dir = []
      if os.path.isdir(path):
        if path.endswith('/'):
          path = path[:-1]
        for DirItem in os.listdir(path):
          FullFname = f"{path}/{DirItem}"
          if os.path.isfile(FullFname):
            # only match extensions included
            if DirItem.endswith('.yml') or DirItem.endswith('.yaml'):
              dir.append({
                'ShortName': DirItem,
                'LongName': FullFname,
                'isFile': True
              })
          else:
            dir.append({
              'ShortName': DirItem,
              'LongName': FullFname,
              'isFile': False
            })
          print (f"{DirItem}: {path}/{DirItem}")

      ret['dir'] = dir
      return ret
