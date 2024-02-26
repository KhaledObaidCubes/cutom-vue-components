<template>
  <v-card>
    <app-async-button @click="buttonAction" :accent="accent" :modifier="modifier" :size="size" block
      >{{ caption }}

      <template #failed>
        <span> Retry<v-icon name="triangle-exclamation" fixed-width class="text-warning ml-1" /></span>
      </template>
    </app-async-button>
  </v-card>
</template>

<script setup lang="ts">
// import { AccentEnum, SizeEnum, ModifierEnum } from 'cubes-ui'
import { ref } from 'vue'
import { AccentEnum, SizeEnum, ModifierEnum } from './async-button'
const modifier = ModifierEnum.default,
  caption = ref('Click for Action'),
  result = ref(''),
  accent = ref(AccentEnum.primary),
  size = SizeEnum.xlarge,
  buttonAction = () => () =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        if (Math.floor(Math.random() * 2) == 0) {
          accent.value = AccentEnum.success
          result.value = caption.value = 'success'
          resolve('success')
          console.log('SUCCESS!')
        } else {
          accent.value = AccentEnum.danger
          result.value = 'fail'
          reject('Fail')
          console.log('failure!')
        }
      }, 1000)
    )
</script>
