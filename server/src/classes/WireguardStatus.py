
# core
import copy
import re

class Interface:
  def __init__(self):
    self.peers = []
    self.attr = {}

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
    interfaces = []
    ThisInterface = Interface()
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
          if not ThisPeer is None:
            ThisInterface.peers.append(ThisPeer)
            ThisPeer = None
          interfaces.append(ThisInterface)
          ThisState = key
          ThisInterface = Interface()
        elif key == 'peer':
          print (f"New peer")
          if not ThisPeer is None:
            ThisInterface.peers.append(ThisPeer)
          ThisState = key
          ThisPeer = Peer()
        else:
          if ThisState == 'interface':
            ThisInterface.attr[key] = value
          elif ThisState == 'peer':
            ThisPeer.attr[key] = value
      # print (line)

    ThisInterface.peers.append(ThisPeer)
    interfaces.append(ThisInterface)
    interfaces.pop(0)
    return interfaces

  def __str__(self):
    return 
