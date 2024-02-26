<!-- estimated 15min  delivered 4hours -->
<template>
  <slot v-if="state.isBusy" name="busy"><v-spinner></v-spinner></slot>
  <template v-else>
    <slot v-if="state.result.data" name="data" :data="state.result.data">{{ state.result.data }}</slot>
    <slot v-if="state.result.error" name="error">{{ state.result.error }}</slot>
  </template>
</template>

<script setup lang="ts">
import { watchEffect, reactive, defineProps } from 'vue'
import { props } from './custom-async'

const state = reactive({ isBusy: false, result: { data: undefined, error: undefined } })
const { promise } = defineProps(props)
watchEffect(async () => {
  if (promise) {
    state.isBusy = true
    state.result.data = undefined
    state.result.error = undefined
    try {
      state.result.data = await promise()
    } catch (err) {
      state.result.error = err as undefined
    } finally {
      state.isBusy = false
    }
  }
})
</script>
