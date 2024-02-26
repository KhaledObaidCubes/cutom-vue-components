<template>
  <div class="m-4">
    <new-btn :accent="'danger'" :mold="'subtle'" :size="'lg'"></new-btn>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const NewBtn = defineAsyncComponent(() => import('../../components/new-btn/new-btn.vue'))
</script>
