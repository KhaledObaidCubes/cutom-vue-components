<template>
  <div>
    <p>// {{ counter }} //</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(3)
const increment = () => {
  counter.value += 1
}

const duplicated = (val: number): number => val * 2
defineExpose({ increment, duplicated })
</script>
