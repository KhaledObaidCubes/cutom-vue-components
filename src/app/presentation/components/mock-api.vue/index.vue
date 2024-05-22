<template>
  <div>
    <!-- <v-async :promise="fetchData">
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
    </v-async> -->
    <v-button @click="addItem()">Add random Item</v-button>
    <br />

    <v-row v-for="obj in result?.data" :key="obj">
      <v-col>
        <div>{{ obj.id }}</div>
      </v-col>
      <v-col><v-literal :model-value="obj.name" class="ml-1 pl-5" tag="span"></v-literal></v-col>
      <v-col><v-button @click="">Delete</v-button></v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { DataType } from '@/app/domain/def/data-type'
import { TApplication, TConfig } from '@/app/domain/meta/i-application'
import { IDataTypeService } from '@/app/service/meta/i-data-type.service'
import { AppContexts } from '@/control'
import { serviceMap } from '@/service'
import { IoC, uid } from 'cubes'
import { IAppContext } from 'cubes-ui'
import { onMounted, ref, watch } from 'vue'

const offset = ref(5)
const limit = ref(5)
const result = ref()
const appContext = IoC.DI().resolve<IAppContext>(AppContexts.appContext!)
const appService = appContext!.services[serviceMap.AppService.key] as TApplication
const root = appService.application.config
console.log(root.configVars.personName)

const dataService = IoC.DI().resolve<IDataTypeService>(serviceMap.DataTypeService.key) as IDataTypeService
const fetchData = () => () => {
  return new Promise(async (res, _rej) => {
    try {
      result.value = await dataService.getAsync({ offset: offset.value, limit: limit.value })
      //console.log(result.value)

      res(result.value)
    } catch (Err) {}
  })
}

const addItem = () => {
  const itemToAdd = new DataType({ id: uid(), name: { en: `english${Math.floor(Math.random() * 10)}`, ar: `english${Math.floor(Math.random() * 10)}` } })
  return new Promise(async (res, _rej) => {
    try {
      result.value = await dataService.postAsync(itemToAdd)

      res(result.value)
    } catch (Err) {
      console.log(Err)
    } finally {
      fetchData()()
      console.log('done')
    }
  })
}
const deleteItem = (itmsArr: DataType[]) => {
  return new Promise(async (res, _rej) => {
    try {
      result.value = await dataService.deleteAsync(itmsArr)

      res(result.value)
    } catch (Err) {
      console.log(Err)
    } finally {
      fetchData()()
      console.log('done')
    }
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

onMounted(async () => (result.value = await dataService.getAsync({ offset: offset.value, limit: limit.value })))
</script>
