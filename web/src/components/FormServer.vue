<template>
  <q-card class="q-ma-md" style="max-width: 500px;">
    <q-toolbar class="bg-transparent text-teal">
      <q-toolbar-title>Server</q-toolbar-title>
      <q-space />
      <q-btn name="tab2" label="Reset" dense flat />
      <q-btn @click="onSaveServer" name="tab3" label="Save" dense flat />
    </q-toolbar>
    <q-card-section>
      <q-item-label>SELF</q-item-label>
      <q-input bottom-slots dense filled
        v-model="ServerConfig.Address"
        class="q-mt-sm" 
        label="IP Address" 
        placeholder="192.168.0.1/24"
        hint="This server's address in CIDR (xxx.xxx.xxx.xxx/xx) format">
        <template v-slot:before>
          <q-icon name="home" />
        </template>
      </q-input>
      <q-separator class="q-mt-md" />

      <q-item-label class="q-mt-md">CONNECTION</q-item-label>
      <q-input bottom-slots dense filled 
        v-model="ServerConfig.Endpoint" 
        class="q-mt-sm" 
        label="Endpoint" 
        placeholder="host.your.domain"
        hint="Address clients connect to">
        <template v-slot:before>
          <q-icon name="vpn_lock" />
        </template>
      </q-input>

      <q-input bottom-slots dense filled
        v-model="ServerConfig.ListenPort" 
        class="q-mt-sm" 
        label="ListenPort" 
        placeholder="51820"
        hint="Port clients connect to">
        <template v-slot:before>
          <q-icon name="numbers" />
        </template>
      </q-input>
      <q-separator class="q-mt-md" />

      <q-item-label class="q-mt-md">AUTHENTICATION</q-item-label>
      <q-input bottom-slots v-model="ServerConfig.Address" class="q-mt-sm" label="PrivateKey" hint="Private key (DO NOT SHARE)" dense filled>
        <template v-slot:before>
          <q-icon name="key" />
        </template>
      </q-input>

      <q-input bottom-slots v-model="ServerConfig.Address" class="q-mt-sm" label="PublicKey" hint="Public key (ok to share)" dense filled>
        <template v-slot:before>
          <q-icon name="public" />
        </template>
      </q-input>
      <q-separator class="q-mt-md" />

      <q-item-label class="q-mt-md">OPTIONAL</q-item-label>
      <q-input bottom-slots dense filled
        v-model="ServerConfig.PersistentKeepalive" 
        class="q-mt-sm" 
        label="PersistentKeepalive" 
        placeholder="30"
        hint="Heartbeat(sec)">
        <template v-slot:before>
          <q-icon name="favorite" />
        </template>
      </q-input>

      <q-input bottom-slots  dense filled
        v-model="ServerConfig.DNS" 
        class="q-mt-sm" 
        label="DNS" 
        hint="DNS overwrite after connection">
        <template v-slot:before>
          <q-icon name="menu_book" />
        </template>
      </q-input>

    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'
import axios from 'axios'

const props = defineProps(['ServerConfig','loadServerConfig'])

function getApiBaseUrl() {
  const ServicePort = process.env.PROD ? document.location.port : 8000
  return `${document.location.protocol}//${document.location.hostname}:${ServicePort}` 
}

async function onSaveServer() {
  console.log(`onSaveServer()`)
  const resp = await axios.post(getApiBaseUrl() + '/api/config/', {
    server: {
      Address: props.ServerConfig.Address ??= '',
      Endpoint: props.ServerConfig.Endpoint ??= '',
      dns: props.ServerConfig.DNS,
      ListenPort: props.ServerConfig.ListenPort || 0,
      PersistentKeepalive: props.ServerConfig.PersistentKeepalive || 0,
    }
  })
  await props.loadServerConfig()
}
</script>