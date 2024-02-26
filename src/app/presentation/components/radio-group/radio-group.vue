<template>
  <div class="form-group">
    <label>{{ caption }}</label>

    <radio-button
      v-for="(item, idx) in radiosInfo"
      :key="idx"
      :valid="item.valid"
      :caption="item.caption"
      :group-name="groupName"
      :id="item.id"
      :checked="parseInt(idx) == modelValue"
      :feed-back="item.feedBack"
      :disabled="item.disabled"
      @change="onChanged($event)"
    >
    </radio-button>
  </div>
</template>

<script setup lang="ts">
import { props } from './radio-group'

import RadioButton from '../../components/custom-radio/custom-radio.vue'

const { radiosInfo } = defineProps(props)
const emit = defineEmits(['update:model-value'])

const onChanged = event => {
  // console.log(event.target.id)
  //emit update:model-value with the index of the radio btn
  // console.log(typeof radiosInfo!.findIndex(obj => obj['id'] == e.target.id))
  emit(
    'update:model-value',
    radiosInfo!.findIndex(obj => obj['id'] == event.target.id)
  )
}
</script>
