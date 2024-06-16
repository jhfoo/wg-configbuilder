<template>
  <q-card>
    <q-toolbar class="bg-transparent text-teal">
      <q-toolbar-title>Config</q-toolbar-title>
      <q-space />
      <q-btn @click="onSaveConfig" icon="save" dense round flat/>
      <q-btn @click="onAddPeer" icon="add" dense round flat/>
    </q-toolbar>
    <q-list>
      <q-item tag="label">
        <q-item-section>
          <q-item-label>Server</q-item-label>
          <q-item-label caption>{{ ComputedServer.Address }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="home"/>
        </q-item-section>
      </q-item>
      <q-item-label header>Peers (5)</q-item-label>
      <q-item v-for="peer in ComputedPeers" tag="label">
        <q-item-section>
          <q-item-label>{{peer.id}}</q-item-label>
          <q-item-label caption>{{peer.Address}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div>
            <q-btn dense flat round icon="expand_less"/>
            <q-btn dense flat round icon="delete"/>
            <q-btn dense flat round icon="expand_more"/>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script setup>
import axios from 'axios'
import { computed } from 'vue'

const props = defineProps(['config','onAddPeer'])
const ComputedPeers = computed(() => {
  const ret = Object.keys(props.config.peers).map((PeerId) => {
    return {
      id: PeerId,
      Address: props.config.peers[PeerId].Address,
    }
  })
  return ret
})
const ComputedServer = computed(() => {
  return props.config.server
})

function getApiBaseUrl() {
  const ServicePort = process.env.PROD ? document.location.port : 8000
  return `${document.location.protocol}//${document.location.hostname}:${ServicePort}` 
}

async function onSaveConfig() {
  console.log(JSON.stringify(props.config))
  const resp = await axios.post(getApiBaseUrl() + '/api/config/', props.config)
}
</script>