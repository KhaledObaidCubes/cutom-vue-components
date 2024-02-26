<template>
  <h1>{{ user.age }}</h1>
  <input v-model="user.age" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { User } from './user'
// const test = ref('hello')
const user = reactive(new User('Khaled', 38))
console.log('init')
</script>
