<template>
  <!-- <div class="figure bg-danger m-6 my-2"></div>
  <div class="figure bg-danger m-6 my-2"></div>
  <div class="figure bg-danger m-6 my-2"></div>
  <div class="figure bg-danger m-6 my-2"></div>
  <div class="ml-4">
    <my-button @click="animateOn">animation</my-button>
    <my-button class="ml-4" @click="animateBack">animation II</my-button>
  </div> -->
  <app-page-content>
    <v-animated :is="resolveComponent('VCard')" :initial="{ x: -100, opacity: 0 }" :animate="{ x: 0, opacity: 1 }" :transition="{ duration: 0.5 }" :exit="{ x: -100, opacity: 0.5 }">
      <template #header>
        <div class="overflow-hidden bg-primary">
          <v-animated is="h3" :initial="{ y: -100, opacity: 0 }" :animate="{ y: 0, opacity: 1 }" :transition="{ delay: 2, duration: 0.5 }" :exit="{ y: -100, opacity: 0.5 }">header</v-animated>
        </div>
      </template>
      <div class="d-flex justify-content-center">
        <v-animated :is="resolveComponent('VButton')" :initial="{ scale: 1, opacity: 0 }" :animate="{ opacity: 1 }" :hover="{ scale: 1.2 }" :transition="{ duration: 0.5 }" :exit="{ opacity: 0.5 }"
          >hello</v-animated
        >
      </div>
    </v-animated>
  </app-page-content>
</template>

<script setup lang="ts">
import { resolveComponent } from 'vue'
</script>
<style lang="scss" scoped>
.figure {
  width: 50px;
  height: 50px;
}
</style>
