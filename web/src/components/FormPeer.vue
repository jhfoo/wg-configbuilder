<template>
  <q-card class="q-ma-md" style="max-width: 500px;">
    <q-toolbar class="bg-transparent text-teal">
      <q-toolbar-title>Peer</q-toolbar-title>
      <q-space />
      <q-btn icon="refresh" label="Reload" flat dense />
      <q-btn @click="onSavePeer" icon="save" label="Save" flat dense />
    </q-toolbar>
    <q-card-section>
      <q-item-label>SELF</q-item-label>
      <q-input bottom-slots dense filled
        v-model="PeerConfig.id"
        class="q-mt-sm" 
        label="ID" 
        :placeholder="PeerConfig.OrigId"
        hint="An id to identify this peer.">
        <template v-slot:before>
          <q-icon name="home" />
        </template>
      </q-input>

      <q-input bottom-slots dense filled
        v-model="PeerConfig.Address"
        class="q-mt-sm" 
        label="IP Address" 
        placeholder="192.168.0.1/24"
        hint="This server's address in CIDR (xxx.xxx.xxx.xxx/xx) format">
        <template v-slot:before>
          <q-icon name="home" />
        </template>
      </q-input>

      <q-item-label class="q-mt-md">OPTIONAL</q-item-label>
      <q-input bottom-slots dense filled
        v-model="PeerConfig.DNS"
        class="q-mt-sm" 
        label="DNS" 
        placeholder="192.168.0.1/24"
        hint="An id to identify this peer.">
        <template v-slot:before>
          <q-icon name="home" />
        </template>
      </q-input>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'
import axios from 'axios'

const props = defineProps(['PeerConfig','onSavePeer'])

function getApiBaseUrl() {
  const ServicePort = process.env.PROD ? document.location.port : 8000
  return `${document.location.protocol}//${document.location.hostname}:${ServicePort}` 
}
</script>