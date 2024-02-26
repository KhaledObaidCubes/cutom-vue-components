<template>
  <div class="m-4">
    <custom-async :promise="requestedPromise">
      <template #data="{ data }">
        <span>{{ `my data=${data}` }}</span>
      </template>
      <template #error></template>
    </custom-async>
  </div>
</template>

<script setup lang="ts">
import CustomAsync from '../../components/custom-async/custom-async.vue'

const requestedPromise = () =>
  new Promise((res, rej) => {
    const data = Math.floor(Math.random() * 2)
    setTimeout(() => {
      data == 1 ? res('Success' + data) : rej('Reject' + data)
    }, 1000)
  })
</script>
