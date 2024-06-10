<template>
  <!-- <q-page class="flex flex-center"> -->
  <q-page class="">
    <div class="row">
      <div class="col-8">
        <q-card class="q-ma-md" style="max-width: 500px;">
          <q-toolbar class="bg-transparent text-teal">
            <q-toolbar-title>Server</q-toolbar-title>
            <q-space />
            <q-tabs v-model="tab" shrink>
              <q-tab name="tab2" label="Reset" />
              <q-tab @click="onSaveServer" name="tab3" label="Save" />
            </q-tabs>
          </q-toolbar>
          <q-card-section>
            <q-item-label>SELF</q-item-label>
            <q-input bottom-slots dense filled
              v-model="ServerAddress"
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
              v-model="ServerEndpoint" 
              class="q-mt-sm" 
              label="Endpoint" 
              placeholder="host.your.domain"
              hint="Address clients connect to">
              <template v-slot:before>
                <q-icon name="vpn_lock" />
              </template>
            </q-input>

            <q-input bottom-slots dense filled
              v-model="ServerListenPort" 
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
            <q-input bottom-slots v-model="ServerAddress" class="q-mt-sm" label="PrivateKey" hint="Private key (DO NOT SHARE)" dense filled>
              <template v-slot:before>
                <q-icon name="key" />
              </template>
            </q-input>

            <q-input bottom-slots v-model="ServerAddress" class="q-mt-sm" label="PublicKey" hint="Public key (ok to share)" dense filled>
              <template v-slot:before>
                <q-icon name="public" />
              </template>
            </q-input>
            <q-separator class="q-mt-md" />

            <q-item-label class="q-mt-md">OPTIONAL</q-item-label>
            <q-input bottom-slots dense filled
              v-model="ServerAddress" 
              class="q-mt-sm" 
              label="PersistentKeepalive" 
              placeholder="30"
              hint="Heartbeat(sec)">
              <template v-slot:before>
                <q-icon name="favorite" />
              </template>
            </q-input>

            <q-input bottom-slots v-model="ServerAddress" class="q-mt-sm" label="DNS" hint="DNS overwrite after connection" dense filled>
              <template v-slot:before>
                <q-icon name="menu_book" />
              </template>
            </q-input>

          </q-card-section>
        </q-card>
      </div>
      <div class="col-4">
        <div class="q-my-md q-mr-md">
          <div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useQuasar } from 'quasar'

defineOptions({
  name: 'IndexPage'
});

const $q = useQuasar()
const ServerAddress = ref(null)
const ServerEndpoint = ref(null)
const ServerListenPort = ref(null)

var LastTestedGoodPath = null

onMounted(async () => {
  const resp = await axios.get(getApiBaseUrl() + '/api/config/')
  const WgConfig = resp.data
  if ('server' in WgConfig) {
    if ('ServerAddress' in WgConfig.server) {
      ServerAddress.value = WgConfig.server.ServerAddress
    }
    if ('Endpoint' in WgConfig.server) {
      ServerEndpoint.value = WgConfig.server.Endpoint
    }

  }
  console.log(WgConfig)
})

function getApiBaseUrl() {
  const ServicePort = process.env.PROD ? document.location.port : 8000
  return `${document.location.protocol}//${document.location.hostname}:${ServicePort}` 
}

async function onSaveServer() {
  console.log(`onSaveServer()`)
  const resp = await axios.post(getApiBaseUrl() + '/api/config/', {
    server: {
      ServerAddress: ServerAddress.value,
      Endpoint: ServerEndpoint.value,
    }
  })
  console.log(resp.data)
  if (resp.data.status === 'ok') {
  }
}

</script>
