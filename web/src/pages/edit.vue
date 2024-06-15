<template>
  <!-- <q-page class="flex flex-center"> -->
  <q-page class="">
    <div class="row">
      <div class="col-8">
        <FormServer :ServerConfig="MainConfig.server"/>
      </div>
      <div class="col-4">
        <div class="q-my-md q-mr-md">
          <FormMain :config="MainConfig"/>
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
import FormMain from 'components/FormMain.vue'

defineOptions({
  name: 'IndexPage'
});

const $q = useQuasar()
const MainConfig = ref({
  server:{},
  peers:[],
})

onMounted(async () => {
  await loadServerConfig()
})

function getApiBaseUrl() {
  const ServicePort = process.env.PROD ? document.location.port : 8000
  return `${document.location.protocol}//${document.location.hostname}:${ServicePort}` 
}

async function loadServerConfig() {
  const resp = await axios.get(getApiBaseUrl() + '/api/config/')
  const WgConfig = resp.data
  if ('server' in WgConfig) {
    // if ('ServerAddress' in WgConfig.server) {
    //   ServerAddress.value = WgConfig.server.ServerAddress
    // }
    // if ('Endpoint' in WgConfig.server) {
    //   ServerEndpoint.value = WgConfig.server.Endpoint
    // }
    // if ('ListenPort' in WgConfig.server) {
    //   ServerListenPort.value = WgConfig.server.ListenPort
    // }
    // if ('DNS' in WgConfig.server) {
    //   ServerDns.value = WgConfig.server.DNS
    // }
    // if ('PersistentKeepalive' in WgConfig.server) {
    //   ServerPersistentKeepalive.value = WgConfig.server.PersistentKeepalive
    // }

    MainConfig.value = resp.data
  }
  console.log(WgConfig)
} 



</script>
