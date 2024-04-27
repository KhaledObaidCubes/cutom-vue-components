<template>
  <div>
    <ref-contrlr ref="btnRef" />
    <v-button @click="incrementParent">inc</v-button>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
const btnRef = ref()

const incrementParent = () => {
  console.log('///   9090 ///')

  btnRef.value.increment()
}
const RefContrlr = defineAsyncComponent(() => import('../../components/ref-controller/index.vue'))
</script>
