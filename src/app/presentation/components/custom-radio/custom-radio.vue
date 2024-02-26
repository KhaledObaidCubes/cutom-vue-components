<template>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" :name="groupName" :class="[valid]" :id="id" :checked="checked" :disabled="disabled" />
    <label class="custom-control-label" :for="id">{{ caption }}</label>
    <div class="invalid-feedback">
      <i class="fa fa-exclamation-circle fa-fw"></i>
      <slot v-if="feedBack" name="feedBack">{{ feedBack }} </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { props } from './custom-radio'

defineProps(props)
</script>
