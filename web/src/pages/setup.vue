<template>
  <!-- <q-page class="flex flex-center"> -->
  <q-page class="">
    <div class="row">
      <div class="col-8">
        <q-card class="q-ma-md">
          <q-card-section>
            <q-input bottom-slots v-model="ConfigFullFname" @update:model-value="onPathChanged" label="VPN Config Full Filename">
              <template v-slot:after>
                <q-btn @click="onTestPath" :disable="isTestDisabled" v-model="ConfigFullFname" flat color="white" text-color="black" label="Test" />
                <q-btn @click="onSavePath" :disable="isSaveDisabled" flat color="pink" text-color="black" label="Save" />
              </template>
            </q-input>
          </q-card-section>
          <q-banner v-if="isShowBanner" class="bg-primary text-white">
            {{ BannerConfig.message }}
            <template v-slot:action>
              <q-btn flat color="white" label="Dismiss" />
              <q-btn flat color="white" label="Update Credit Card" />
            </template>
          </q-banner>
        </q-card>
      </div>
      <div class="col-4">
        <div class="q-my-md q-mr-md">
          <div>
            Directory
            <q-list dense padding class="rounded-borders">
              <q-item v-for="item in DirItems" @click="onSelectDirItem(item.LongName)" clickable v-ripple>
                <q-item-section>
                  {{item.ShortName}}
                </q-item-section>
              </q-item>
            </q-list>
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
const ConfigFullFname = ref(null)
const isTestDisabled = ref(true)
const isSaveDisabled = ref(true)
const isShowBanner = ref(false)
const BannerConfig = {}
const DirItems = ref([])

var LastTestedGoodPath = null

onMounted(async () => {
  // WgStatus.value = await testPath(getApiBaseUrl(), )
  const resp = await axios.get(getApiBaseUrl() + '/api/config/path')
  ConfigFullFname.value = resp.data
  onPathChanged(resp.data)
})

function onSelectDirItem(SelectedFullFname) {
  ConfigFullFname.value = SelectedFullFname
  onTestPath()
}

function onPathChanged(NewValue) {
  isTestDisabled.value = (NewValue.length === 0)

  // console.log(`onPathChanged: ${NewValue}`)
  if (NewValue === LastTestedGoodPath) {
    isSaveDisabled.value = false
  } else {
    isSaveDisabled.value = true
  }
}

function getApiBaseUrl() {
  const ServicePort = process.env.PROD ? document.location.port : 8000
  return `${document.location.protocol}//${document.location.hostname}:${ServicePort}` 
}

async function onSavePath() {
  const resp = await axios.post(getApiBaseUrl() + '/api/config/path', {
    path: ConfigFullFname.value
  })
  console.log(resp.data)
  if (resp.data.status === 'ok') {
  }
}

async function onTestPath() {
  const resp = await axios.post(getApiBaseUrl() + '/api/config/path/test', {
    path: ConfigFullFname.value
  })
  console.log(resp.data)
  if (resp.data.status === 'ok') {
    BannerConfig.message = 'Path is valid.'

    $q.notify({
      message: BannerConfig.message,
      color: 'primary',
      multiLine: true,
      avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
      // actions: [
      //   { label: 'Reply', color: 'yellow', handler: () => { /* ... */ } }
      // ]
    })

    // isShowBanner.value = true

    isSaveDisabled.value = false
    LastTestedGoodPath = ConfigFullFname.value
    return
  }

  // else
  // check if path is a directory
  if ('dir' in resp.data) {
    DirItems.value = resp.data.dir
  }

  return resp.data
}
</script>
