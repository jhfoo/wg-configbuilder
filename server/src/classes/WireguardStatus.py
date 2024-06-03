# core
import copy
import re

# community
import psutil

class IpAddr:
  def __init__(self, addr, netmask):
    self.addr = addr
    self.netmask = netmask

class Interface:
  def __init__(self):
    self.peers = []
    self.attr = {}
    self.id = None
    self.ip = None
    self.isServer = True

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
            if key == 'persistent keepalive':
              ThisInterface.isServer = False
      # print (line)

    # get local endpoint address
    networks = psutil.net_if_addrs()
    for interface in interfaces:
      if interface in networks:
        addr = networks[interface][0]
        interfaces[interface].ip = IpAddr(addr.address, addr.netmask) 

    return interfaces

  def __str__(self):
    return 
