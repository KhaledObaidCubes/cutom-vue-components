<template>
  <div class="custom-control custom-checkbox" :class="[inline ? 'custom-control-inline' : '']">
    <input type="checkbox" class="custom-control-input" :class="[accent]" :id="id" :indeterminate="indeterminate" :checked="checked" />
    <label class="custom-control-label" :for="id">{{ caption }}</label>
    <div :class="[accent == 'muted' ? 'text-muted' : accent == 'is-invalid' ? 'invalid-feedback' : 'valid-feedback']">
      <slot :icon-name="iconName"><v-icon :name="iconName" class="mr-1" />{{ description }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { props } from '../../components/checkbox/checkbox'
defineProps(props)
</script>
