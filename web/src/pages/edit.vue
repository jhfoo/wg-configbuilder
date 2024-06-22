<template>
  <!-- <q-page class="flex flex-center"> -->
  <q-page class="">
    <div class="row">
      <div class="col-8">
        <component :is="EditComponent" v-bind="EditProps"/>
        <!-- <FormServer :ServerConfig="MainConfig.server"/> -->
      </div>
      <div class="col-4">
        <div class="q-my-md q-mr-md">
          <FormMain v-bind="FormMainProps"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useQuasar } from 'quasar'
import FormServer from 'components/FormServer.vue'
import FormPeer from 'components/FormPeer.vue'
import FormMain from 'components/FormMain.vue'

defineOptions({
  name: 'IndexPage'
});

const $q = useQuasar()
const MainConfig = ref({
  server:{},
  peers:[],
})
const EditProps = ref({})
const FormMainProps = ref({
  config: MainConfig,
  onAddPeer: onAddPeer,
  onSelectPeer: onSelectPeer,
  onSelectServer: onSelectServer,
  onDeletePeer: onDeletePeer,
  onLoadConfig: loadServerConfig,
})

var EditComponent = null

onMounted(async () => {
  await loadServerConfig()
})

function onSelectServer() {
  EditProps.value = {
    ServerConfig: MainConfig.value.server,
    loadServerConfig: loadServerConfig,
  }
  EditComponent = FormServer
}

function onSelectPeer(PeerId) {
  console.log(`[debug] onSelectPeer: ${PeerId}`)
  const CloneStr = JSON.stringify(MainConfig.value.peers[PeerId])
  const PeerClone = JSON.parse(CloneStr)
  PeerClone.id = PeerId
  PeerClone.OrigId = PeerId

  EditProps.value = {
    PeerConfig: PeerClone,
    onSavePeer: onSavePeer,
  }
  EditComponent = FormPeer
}

function onDeletePeer(PeerId) {
  if ('PeerConfig' in EditProps.value && 'OrigId' in EditProps.value.PeerConfig) {
    // remove peer as an editable component
    onSelectServer()
  }

  delete MainConfig.value.peers[PeerId]
}

function onSavePeer() {
  const peers = MainConfig.value.peers
  const NewConfig = EditProps.value.PeerConfig
  if (NewConfig.id !== EditProps.value.PeerConfig.OrigId) {
    peers[EditProps.value.PeerConfig.id] = peers[EditProps.value.PeerConfig.OrigId]
    delete peers[NewConfig.OrigId]
    // this needs to be set so the next Save does not trigger this block
    NewConfig.OrigId = NewConfig.id
  }

  // console.log(EditProps.value.PeerConfig)
  const PeerId = NewConfig.id
  peers[PeerId].Address = NewConfig.Address
  peers[PeerId].PublicKey = NewConfig.PublicKey
  peers[PeerId].PrivateKey = NewConfig.PrivateKey
  // console.log(peers[PeerId])
  // console.log(peers)
}

function getApiBaseUrl() {
  const ServicePort = process.env.PROD ? document.location.port : 8000
  return `${document.location.protocol}//${document.location.hostname}:${ServicePort}` 
}

function onAddPeer() {
  console.log(MainConfig.peers)
  const PeerId = getUniquePeerId()
  MainConfig.value.peers[PeerId] = {
    Address: '',
  }
  onSelectPeer(PeerId)
}

function getUniquePeerId() {
  const ID_PREFIX = 'peer'
  var id = 0
  var TestId = null
  while (true) {
    TestId = ID_PREFIX + id
    if (!Object.keys(MainConfig.value.peers).includes(TestId)) {
      break
    }
    //else 
    id++
  }
  return TestId
}

async function loadServerConfig() {
  const resp = await axios.get(getApiBaseUrl() + '/api/wireguard/')
  const WgConfig = resp.data
  if ('server' in WgConfig) {
    MainConfig.value = resp.data
    onSelectServer()
  }
  console.log(WgConfig)
} 



</script>
