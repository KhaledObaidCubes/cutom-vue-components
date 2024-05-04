<template>
  <div>
    <async-content />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const AsyncContent = defineAsyncComponent(() => import('../../components/mock-api.vue'))
</script>
