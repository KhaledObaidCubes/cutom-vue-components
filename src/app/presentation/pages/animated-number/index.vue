<template>
<v-card>
  modelValue ==>{{ modelValue }}
    <v-input v-model="modelValue" type="number"></v-input>
    <animated-counter :start-from="0" :final-value="modelValue" :duration="1.25" :delay="0.1">
      <template #customCounter="{ data }"
        ><div subtle accent="primary" class="tile tile-circle text-primary">{{ data }}</div>
      </template></animated-counter
    >
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AnimatedCounter from '../../components/animated-counter/animated-counter.vue'
const modelValue = ref(0)
</script>
