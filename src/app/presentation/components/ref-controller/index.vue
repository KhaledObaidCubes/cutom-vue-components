<template>
  <div>{{ controlledValue }}</div>
  <v-button @click="yelled('welcome!')"></v-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const controlledValue = ref('hello!')

const yelled = (msg: string) => {
  controlledValue.value = msg
}
defineExpose({ yelled })
</script>
