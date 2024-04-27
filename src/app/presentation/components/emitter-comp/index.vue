<template>
  <div>
    <div>
      <v-button @click="despatcher()">count+{{ counter }}</v-button>
    </div>
    <div><v-button @click="makeParentTalk()">talk parent</v-button></div>
    <div><v-button @click="sendValueToParentWithEmit('Hello world!')">sendVal to parent</v-button></div>
    <div><v-button @click="$emit('hereYouGoParent', 555)">other method to sendVal to parent</v-button></div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'
import { props as playProps } from './emitter-comp'
const props = defineProps(playProps)
const { modelValue } = toRefs(props)
const counter = ref()
const emit = defineEmits()
const despatcher = () => {
  counter.value += 1
  emit('update:model-value', counter.value)
}

watch(
  () => modelValue.value,
  to => {
    counter.value = counter.value ?? to
    emit('update:model-value', counter.value)
  },
  { immediate: true }
)
const makeParentTalk = () => {
  emit('alerter')
}
const sendValueToParentWithEmit = (msg: string) => {
  emit('hereYouGoParent', msg)
}
</script>
