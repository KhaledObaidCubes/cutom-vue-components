<template>
  <slot name="customCounter" :data="wayPoint">{{ wayPoint }}</slot>
</template>

<script setup lang="ts">
import { onUnmounted, ref, toRef, watch } from 'vue'
import { props as MotionProps } from './animated-counter'
import { Easing, EasingFunction, EasingGenerator, animate } from 'motion'

const props = defineProps(MotionProps)
const finalValue = toRef(props, 'finalValue')
const duration = toRef(props, 'duration')
const ease = toRef(props, 'ease')
const wayPoint = ref(0)
const timeoutId = ref()
const whenSetTimeOutComplete = () => {
  clearTimeout(timeoutId.value)
}
watch(
  () => finalValue.value,
  to => {
    console.log('watch', to)

    clearTimeout(timeoutId.value)
    timeoutId.value = setTimeout(
      () => {
        if (to) animate(progress => (wayPoint.value = Math.round(progress * to)), { duration: duration.value, easing: ease.value as EasingGenerator | Easing | Easing[] | EasingFunction | undefined })
      },
      1000,
      whenSetTimeOutComplete()
    )
  },
  {
    immediate: true
  }
)
onUnmounted(() => {
  clearTimeout(timeoutId.value)
})
</script>
