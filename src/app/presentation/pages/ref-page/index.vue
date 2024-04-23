<template>
  <div>
    <ref-controller ref="refGate"></ref-controller>
  </div>
  <div>
    <v-button @click="forceToChange()">Change from parent</v-button>
  </div>
  <v-button @click="showNumArray()">alertMe</v-button>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
const refGate = ref()

const forceToChange = () => refGate?.value.yelled('Hello gentle men!')
const showNumArray = () => alert(refGate.value.numArr)

const RefController = defineAsyncComponent(() => import('../../components/ref-controller/index.vue'))
</script>
