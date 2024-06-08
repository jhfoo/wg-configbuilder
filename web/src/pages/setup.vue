<template>
  <q-page class="flex flex-center">
    setup [{{ WgStatus }}]
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

defineOptions({
  name: 'IndexPage'
});

const WgStatus = ref(null)

onMounted(async () => {
  const ServicePort = process.env.PROD ? document.location.port : 8000
  const ServiceUrl = `${document.location.protocol}//${document.location.hostname}:${ServicePort}` 
  console.log(`location: ${ServiceUrl}`)
  WgStatus.value = await getWgStatus(ServiceUrl)
})

async function getWgStatus(ServiceUrl) {
  const resp = await axios.get(ServiceUrl + '/api/wireguard/config')
  console.log(resp.data)
  return resp.data
}
</script>
