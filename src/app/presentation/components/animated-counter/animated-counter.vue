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
  wayPoint = ref(0),
  noop = () => 0
let animationControl: AnimationControls | undefined = undefined
watch(
  () => finalValue.value,
  to => {
    if (to !== undefined) {
      //to instantly stop and update the current animation once the finalValue change
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
//once the component remove or navigate to new page (rout) onUnmount will cancel and reset the animation closure

onUnmounted(animationControl ? (animationControl as AnimationControls).cancel : NOOP)

// onUnmounted(animationControl ? (animationControl as AnimationControls).cancel : () => 0)
// onUnmounted(animationControl ? (animationControl as AnimationControls).cancel : noop)
</script>
