<template>
  <slot :data="wayPoint">{{ wayPoint }}</slot>
</template>

<script setup lang="ts">
import { onUnmounted, ref, toRef, watch } from 'vue'
import { props as MotionProps } from './animated-counter'
import { AnimationControls, AnimationOptions, animate } from 'motion'
import { NOOP } from 'cubes'

const props = defineProps(MotionProps),
  finalValue = toRef(props, 'finalValue'),
  wayPoint = ref(0)
let animationControl: AnimationControls | undefined = undefined
watch(
  () => finalValue.value,
  to => {
    if (to !== undefined) {
      //
      animationControl?.cancel()
      animationControl = animate(progress => (wayPoint.value = Math.round(progress * to)), {
        duration: props.duration,
        easing: props.ease as AnimationOptions['easing']
      })
    }
  },
  {
    immediate: true
  }
)
onUnmounted(animationControl ? (animationControl as AnimationControls).cancel : NOOP)
</script>
