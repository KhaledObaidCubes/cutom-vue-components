<template>
  <div class="form-group">
    <label v-if="!isBulkAction" class="d-block">{{ groupCaption }}</label>
    <check-box v-else :caption="groupCaption" :id="uid()" :checked="allSellected" :indeterminate="partialSellected" @change="toSellect"></check-box>
    <check-box
      v-for="(item, index) in dataModel"
      :caption="item.caption"
      :id="item.id"
      :description="item.description"
      :icon-name="item.iconName"
      :accent="item.accent"
      :inline="inline"
      :checked="checkedBoxes[index]"
      :class="[isBulkAction ? 'ml-4' : '', 'mt-2']"
      @change="onChanged($event)"
    >
    </check-box>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CheckBox from './checkbox.vue'
import { props } from './checkbox-group'
import { uid } from 'cubes'

const { dataModel } = defineProps(props)
const allSellected = ref(false)
const partialSellected = ref(false)
const checkedBoxes = ref([])
const emit = defineEmits(['update:model-value'])

const onChanged = (event: { target: { id: string; checked: any } }) => {
  //console.log(e.target.checked)

  ;(<boolean[]>checkedBoxes.value)[dataModel!.findIndex(obj => obj['id'] == event.target.id)] = event.target.checked //assertion example both this line and the following are the same
  //(checkedBoxes.value as boolean[])[dataModel!.findIndex(obj => obj['id'] == event.target.id)] = event.target.checked

  groupState(checkedBoxes.value)
  emit('update:model-value', checkedBoxes.value)
}
const toSellect = () => {
  if (allSellected.value) {
    allSellected.value = false
    for (let i = 0; i <= checkedBoxes.value.length! - 1; i++) {
      ;(checkedBoxes.value as boolean[])[i] = false
    }
  } else {
    allSellected.value = true
    for (let i = 0; i <= checkedBoxes.value.length! - 1; i++) {
      ;(<boolean[]>checkedBoxes.value)[i] = true
    }
  }
}
const groupState = (checkedBoxesState: any) => {
  let allSlctFlag = 0

  for (let i = 0; i <= checkedBoxesState?.length! - 1; i++) {
    checkedBoxesState[i] == false ? (allSlctFlag += 1) : allSlctFlag
  }
  // console.log(`allSlctFlag=${allSlctFlag}`)

  if (allSlctFlag == 0) {
    allSellected.value = true
    partialSellected.value = false
  } else if (allSlctFlag > 0 && allSlctFlag != checkedBoxesState.length!) {
    allSellected.value = false
    partialSellected.value = true
  } else {
    allSellected.value = false
    partialSellected.value = false
  }
}

onMounted(() => {
  let allSlctFlag = 0
  for (let i = 0; i <= dataModel?.length! - 1; i++) {
    dataModel![i]['checked'] == false ? (allSlctFlag += 1) : allSlctFlag, (checkedBoxes.value as boolean[]).push(dataModel![i]['checked'])
  }
  if (allSlctFlag == 0) {
    allSellected.value = true
    partialSellected.value = false
  } else if (allSlctFlag > 0 && allSlctFlag != dataModel?.length!) {
    allSellected.value = false
    partialSellected.value = true
  }
  emit('update:model-value', checkedBoxes.value)
})
</script>
