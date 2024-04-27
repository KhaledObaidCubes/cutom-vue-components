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
defineExpose({ increment })
</script>
