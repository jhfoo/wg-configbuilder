<template>
  <q-card>
    <q-toolbar class="bg-transparent text-teal">
      <q-toolbar-title>Config</q-toolbar-title>
      <q-space />
      <q-btn @click="onSaveConfig" icon="save" dense round flat/>
      <q-btn @click="onAddPeer" icon="add" dense round flat/>
    </q-toolbar>
    <q-list>
      <q-item @click="onSelectServer" tag="label">
        <q-item-section>
          <q-item-label>Server</q-item-label>
          <q-item-label caption>{{ ComputedServer.Address }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="home"/>
        </q-item-section>
      </q-item>

      <q-item-label header>PEERS (5)</q-item-label>
      <!-- @click="onSelectPeer(peer.id)" -->
      <q-item v-for="peer in ComputedPeers" @click.prevent="onSelectPeer(peer.id)" tag="label" >
        <q-item-section>
          <q-item-label>{{peer.id}}</q-item-label>
          <q-item-label caption>{{peer.Address}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div>
            <q-btn @click.stop="onDeletePeer(peer.id)" dense flat round icon="delete"/>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script setup>
import axios from 'axios'
import { computed } from 'vue'

const props = defineProps(['config',
  'onAddPeer',
  'onSelectPeer',
  'onSelectServer',
  'onDeletePeer'])
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

function test(PeerId) {
  console.log(`Test: ${PeerId}`)
}
function getApiBaseUrl() {
  const ServicePort = process.env.PROD ? document.location.port : 8000
  return `${document.location.protocol}//${document.location.hostname}:${ServicePort}` 
}

async function onSaveConfig() {
  console.log(JSON.stringify(props.config))
  const resp = await axios.post(getApiBaseUrl() + '/api/config/', props.config)
}
</script>