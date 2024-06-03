
# core
import copy
import re

class Interface:
  def __init__(self):
    self.peers = []
    self.attr = {}
    self.id = None

  def __str__(self):
    FakeAttr = copy.deepcopy(self.attr)
    FakeAttr['peers'] = []
    for peer in self.peers:
      FakeAttr['peers'].append(peer.__dict__)
    return str(FakeAttr)

class Peer:
  def __init__(self):
    self.attr = {}

class WireguardStatus:
      
  def __init__(self):
    self.peers = []

  @classmethod
  def parseWgShow(self, RawData):
    interfaces = {}
    ThisInterface = None
    ThisPeer = None
    ThisState = None

    for line in RawData.split('\n'):
      matches = re.search('^(.+?):(.+)', line)
      if matches is None:
        print (f"regex: unknown line")
        ThisState = None
      else:
        key = matches.group(1).strip()
        value = matches.group(2).strip()
        print (f"key = {key}, value = {value}")
        if key == 'interface':
          print (f"New interface")

          ThisInterface = Interface()
          ThisInterface.id = value
          interfaces[value] = ThisInterface
          ThisPeer = None
          ThisState = key
        elif key == 'peer':
          print (f"New peer")
          ThisState = key
          ThisPeer = Peer()
          ThisInterface.peers.append(ThisPeer)
        else:
          if ThisState == 'interface':
            ThisInterface.attr[key] = value
          elif ThisState == 'peer':
            ThisPeer.attr[key] = value
      # print (line)

    return interfaces

  def __str__(self):
    return 
