<template>
  <div class="m-4">
    <hr />
    <check-box-group v-model="allcheckedBoxesState" :data-model="checkBoxGroupModel" :group-caption="'Select category'"></check-box-group>
    <p>{{ allcheckedBoxesState }}</p>
    <hr />
    <check-box-group v-model="allcheckedBoxesStateII" :data-model="checkBoxGroupModelII" inline :group-caption="'Select category'"></check-box-group>
    <p>{{ allcheckedBoxesStateII }}</p>
  </div>
</template>

<script setup lang="ts">
/**
 *
 * a ui ccpmonent is :
 * 1-HTML(vue file) shape/visual of the component
 *  1.1 has props
 *  1.2 emit events
 *  1.3 contians logic
 *
 * 2-data(schema) data required by the component
 * 3-model(interactive state for the component)
 *  3.1 v-model
 * ----------------------------------------------
 * example:
 * checkbox group
 * 1-
 *
 *
 *
 *
 *
 *
 *
 */
//import CheckBox from '../../components/checkbox/checkbox.vue'
import { ref } from 'vue'
import CheckBoxGroup from '../../components/checkbox/checkbox-group.vue'
import { checkBoxGroupModel, checkBoxGroupModelII } from '../../components/checkbox/data'
const allcheckedBoxesState = ref([])
const allcheckedBoxesStateII = ref([])
</script>
