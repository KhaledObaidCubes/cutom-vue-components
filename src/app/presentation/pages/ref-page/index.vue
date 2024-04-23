<template>
  <div>
    <ref-controller ref="refGate"></ref-controller>
  </div>
  <v-button @click="forceToChange()">Change from parent</v-button>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
const refGate = ref()

const forceToChange = () => refGate?.value.yelled('Hello gentle men!')
const RefController = defineAsyncComponent(() => import('../../components/ref-controller/index.vue'))
</script>
