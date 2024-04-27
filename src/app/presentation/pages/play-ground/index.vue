<template>
  <div>
    <v-input v-model="counter" type="number"></v-input>
    <emitter-comp v-model="counter" @alerter="alerter" @hereYouGoParent="alerterII($event)"></emitter-comp>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const counter = ref()
const alerter = (e: string) => alert(e ? e : 'no argument available')
const alerterII = (e: string) => alert(e ? `the child said : ${e}` : 'no argument available')
const EmitterComp = defineAsyncComponent(() => import('../../components/emitter-comp/index.vue'))
</script>
