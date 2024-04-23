<template>
  <div>{{ controlledValue }}</div>
  <v-button @click="yelled('welcome!')"></v-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let numArr = [1, 2, 3, 4, 5, 6]
const controlledValue = ref('hello!')

const yelled = (msg: string) => {
  controlledValue.value = msg
}
defineExpose({ yelled, numArr })
</script>
