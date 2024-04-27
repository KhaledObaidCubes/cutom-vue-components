<template>
  <div class="m-4">
    <radio-group v-model="cheked" :caption="'Radios list Options:'" :radios-info="radioBtnsInfo" :group-name="`grn${Math.floor(Math.random() * 5)}`"> </radio-group>
  </div>
  {{ cheked }}
  <v-button @click="cheked = 2">ffg</v-button>
  <v-input v-model="inputModel" :min="0" :max="radioBtnsInfo.length - 1" type="number"></v-input>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { radioBtnsInfo } from '../../components/radio-group/data'
import RadioGroup from '../../components/radio-group/radio-group.vue'
const cheked = ref(0)
const inputModel = computed({
  //we use the computed just to convert the checked value from string to number
  get() {
    return `${cheked.value}`
  },
  set(value: string) {
    cheked.value = +value
    if (cheked.value > radioBtnsInfo.length - 1) cheked.value = radioBtnsInfo.length - 1
  }
})
</script>
