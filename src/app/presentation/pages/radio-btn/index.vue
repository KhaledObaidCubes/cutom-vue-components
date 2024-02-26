<template>
  <div class="m-4">
    <radio-btn :valid="'is-invalid'" :caption="'Click me Please'" :id="`a${Math.floor(Math.random() * 300)}`" :feedBack="FBMSG">
      <template #feedBack><h3>Custom feedback</h3></template>
    </radio-btn>
    <hr class="my-5" />
    <radio-btn :valid="'is-invalid'" :caption="'Click me Please'" :id="`a${Math.floor(Math.random() * 300)}`" :feedBack="FBMSG"> </radio-btn>
    <hr class="my-5" />
    <radio-btn :caption="'Click me Please'" disabled> </radio-btn>
    <hr class="my-5" />
    <radio-btn :valid="'is-valid'" :caption="'Click me Please'" :id="`a${Math.floor(Math.random() * 300)}`"> </radio-btn>
  </div>
</template>
<script setup lang="ts">
const FBMSG = 'just comment the slot tag to show this feedback message!'
import RadioBtn from '../../components/custom-radio/custom-radio.vue'
</script>
