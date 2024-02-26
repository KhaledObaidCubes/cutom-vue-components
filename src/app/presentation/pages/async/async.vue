<template>
  <v-card>
    <v-async :promise="asyncAction" :size="size" :accent="accent" type="grow">
      <template v-slot:ready="{ result: { success, fail } }">
        <template v-if="success">
          <h6>
            <v-badge pill accent="success" :size="size">Done</v-badge>
            <pre>{{ success }}</pre>
          </h6>
        </template>
        <template v-else>
          <h6><v-badge pill :accent="accent" :size="size">Failed</v-badge> {{ fail }}</h6>
        </template>
      </template>
    </v-async>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AccentEnum, SizeEnum } from '../../pages/async-button/async-button'

const accent = ref(AccentEnum.primary)
const size = ref(SizeEnum.xlarge)

const asyncAction = () => () =>
  new Promise((res, rej) =>
    setTimeout(() => {
      if (Math.floor(Math.random() * 2) == 1) {
        accent.value = AccentEnum.success
        size.value = SizeEnum.small
        res('Success')
      } else {
        accent.value = AccentEnum.danger
        size.value = SizeEnum.xlarge
        rej('Reject')
      }
    }, 1000)
  )
</script>
