<template>
  <h2>{{ dynamicValue }}</h2>
  <div>
    <simple-vmodel v-model="dynamicValue" />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const dynamicValue = ref()
const SimpleVmodel = defineAsyncComponent(() => import('../../components/simple-vmodel/index.vue'))
</script>
