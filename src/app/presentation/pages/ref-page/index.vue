<template>
  <div>
    <p>{{ Math.sqrt(double) }}x{{ Math.sqrt(double) }}={{ double }}</p>
    <v-button @click="multiplyNum">doublicate</v-button>
    <br />
    <ref-contrlr ref="btnRef" />
    <v-button @click="incrementParent">inc</v-button>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
const btnRef = ref()
const double = ref(2)
const incrementParent = () => {
  btnRef.value.increment()
}
const multiplyNum = () => (double.value = btnRef.value.duplicated(double.value))
const RefContrlr = defineAsyncComponent(() => import('../../components/ref-controller/index.vue'))
</script>
