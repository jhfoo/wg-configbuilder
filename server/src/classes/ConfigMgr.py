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

class ConfigMgr:
  @classmethod
  async def getStatus(self):
    return {}

  @classmethod
  def getWireguardConfig(self):
    return ''

  @classmethod
  def getAppConfig(self):
    with open('conf/app.yaml','r') as infile:
      config = yaml.load(infile.read(), Loader = Loader)
      if config == None:
        return {}
      # else
      return config

  @classmethod
  def saveAppConfig(self, AppConfig):
    with open('conf/app.yaml','w') as outfile:
      outfile.write(yaml.dump(AppConfig, Dumper = Dumper))

  @classmethod
  def saveConfigPath(self, path):
    TestResp = self.testConfigPath(path)
    if TestResp['status'] == 'ok':
      AppConfig = self.getAppConfig()
      print(AppConfig)

      if not 'WireguardConfig' in AppConfig:
        AppConfig['WireguardConfig'] = ''

      AppConfig['WireguardConfig'] = path
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
