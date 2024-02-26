<template>
  <div>
    <button type="button" class="btn" :class="[accentClass, sizeClass, moldClass]">
      <slot>Hello!</slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { khaloodProps as btnProps } from './new-btn'
const props = defineProps(btnProps)
const { accent, size, mold } = props
const accentClass = computed(() => `btn-${mold}-${accent}`)
const sizeClass = computed(() => (size != '' ? `btn-${size}` : ''))
const moldClass = computed(() => (mold.toString() == '' ? `btn-${accent}` : `btn-${mold}-${accent}`))
</script>
