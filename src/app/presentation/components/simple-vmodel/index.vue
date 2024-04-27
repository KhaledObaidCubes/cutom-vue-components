<template>
  <v-button :accent="msg.accent" @click="togle()">{{ msg.name }}</v-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref({ name: 'ON', accent: 'danger' })
const emit = defineEmits()
const togle = () => {
  msg.value.name == 'ON' ? (msg.value = { name: 'OFF', accent: 'primary' }) : (msg.value = { name: 'ON', accent: 'danger' })
  emit('update:model-value', msg.value.name)
}
</script>
