<template>
  <div>
    <v-async :promise="fetchData">
      <template #busy>
        <div class="d-flex align-items-center justify-content-center h-100">
          <v-spinner />
        </div>
      </template>
      <template v-slot:ready="{ result: { success } }">
        <table>
          <tr>
            <th>ID</th>
            <th>name OBJ</th>
          </tr>
          <template v-for="item in success.data" :key="item">
            <tr>
              <td style="width: 250px">{{ item.id }}</td>
              <td><v-literal tag="span" v-model="item.name"></v-literal></td>
            </tr>
          </template>
        </table>
      </template>
    </v-async>
    <v-button @click="offset += 1">next</v-button>
  </div>
</template>

<script setup lang="ts">
import { IDataTypeService } from '@/app/service/meta/i-data-type.service'
import { serviceMap } from '@/service'
import { IoC } from 'cubes'
import { ref, watch } from 'vue'

const offset = ref(0)
const limit = ref(5)
const result = ref()

const dataService = IoC.DI().resolve<IDataTypeService>(serviceMap.DataTypeService.key) as IDataTypeService
const fetchData = () => () => {
  return new Promise(async (res, _rej) => {
    try {
      result.value = await dataService.getAsync({ offset: offset.value, limit: limit.value })
      res(result.value)
    } catch (Err) {}
  })
}

watch(
  () => offset.value,
  async to => {
    console.log(`offsite was changed!! ${to}`)

    try {
      result.value = await dataService.getAsync({ offset: to, limit: limit.value })
      console.log(result.value.data)
    } catch (err) {}
  }
)
</script>
