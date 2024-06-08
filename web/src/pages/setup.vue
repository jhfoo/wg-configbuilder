<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <q-input bottom-slots v-model="ConfigFullFname" @update:model-value="onPathChanged" label="Config Full Filename">
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

var LastTestedGoodPath = null

onMounted(async () => {
  // WgStatus.value = await testPath(getApiBaseUrl(), )
})

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
  }

  return resp.data
}
</script>
