<template>
  <v-button :accent="msg.accent" @click="togle()">{{ msg.name }}</v-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref({ name: 'ON', accent: 'danger' })
const state = ref(true)
const emit = defineEmits()
const togle = () => {
  console.log(state.value)
  state.value = !state.value
  state.value ? (msg.value = { name: 'ON', accent: 'danger' }) : (msg.value = { name: 'OFF', accent: 'primary' })
  emit('update:model-value', state.value)
}
</script>
