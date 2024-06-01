# wg-configbuilder
Generates Wireguard server and client config from yaml

# Requirements
- Python 3.9
- Rust (builds dependencies)
- Wireguard (specifically wg binary)

# Install
```
git clone https://github.com/jhfoo/wg-configbuilder.git
./bin/install
```

# Usage
```
./bin/wg-configbuilder build <yaml file>
# drops .conf files in data/
# updates yaml file with keys
```

# Minimal config
```
server:
  Address: 192.168.0.1/32
  DNS: 192.168.0.1
  Endpoint: wireguard.kungfoo.info:51820
  ListenPort: 51820
  PersistentKeepalive: 30

peers:
  client1:
    Address: 192.168.0.100/32
  client2:
    Address: 192.168.0.101/32
```

expands to
```
```

# Full config
