<template>
  <app-page-content>
    <custom-table></custom-table>
  </app-page-content>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const CustomTable = defineAsyncComponent(() => import('../../components/custom-table/custom-table.vue'))
</script>
