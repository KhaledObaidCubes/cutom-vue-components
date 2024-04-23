<template>
  <h3>The following are two objects with the same instance:</h3>
  <div>shallow (I) : {{ shallowI.id }} - {{ shallowI.strProperty }}</div>
  <div>shallow (II) : {{ shallowII.id }} - {{ shallowII.strProperty }}</div>
  <h3>The following are two deferent instances of the same class:</h3>
  <div>Instance (I) : {{ instanceI.id }} - {{ instanceI.strProperty }}</div>
  <div>Instance (II) : {{ instanceII.id }} - {{ instanceII.strProperty }}</div>
</template>

<script setup lang="ts">
import { DemoSingletonClass } from '@/app/domain/def/demo-singleton-class'
import { DemoClass } from '@/app/domain/def/demo-class'
const shallowI = new DemoSingletonClass()
const shallowII = new DemoSingletonClass()
shallowI.strProperty = 'Anas1'
shallowII.strProperty = 'Anas2'

const instanceI = new DemoClass()
const instanceII = new DemoClass()
instanceI.strProperty = 'Khaled1'
instanceII.strProperty = 'Khaled2'
</script>
