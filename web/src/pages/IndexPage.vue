<template>
  <q-page class="flex flex-center">
    <!--
    url: {{ document.location.protocol }}<br/>
    -->
    hello
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

defineOptions({
  name: 'IndexPage'
});

onMounted(async () => {
  const ServicePort = process.env.PROD ? document.location.port : 8000
  const ServiceUrl = `${document.location.protocol}//${document.location.hostname}:${ServicePort}` 
  console.log(`location: ${ServiceUrl}`)

  const resp = await axios.get(ServiceUrl + '/api/wireguard/status')
  console.log(resp.data)
})
// console.log(`process.env.DEV: ${process.env.DEV}`)
// console.log(`process.env.PROD: ${process.env.PROD}`)
</script>
