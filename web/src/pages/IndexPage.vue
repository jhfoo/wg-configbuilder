<template>
  <q-page class="flex flex-center">
    isProduction: {{ isProduction }}<br/>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'IndexPage'
});

// console.log(`process.env.DEV: ${process.env.DEV}`)
// console.log(`process.env.PROD: ${process.env.PROD}`)
</script>
