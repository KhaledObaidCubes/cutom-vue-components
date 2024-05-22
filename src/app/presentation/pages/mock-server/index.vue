<template>
  <div>
    <async-content />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { IoC } from 'cubes'
import { serviceMap } from '@/service'
import { IAppService } from '@/app/service/meta/i-app-service'

const appService = IoC.DI().resolve(serviceMap.AppService.key) as IAppService
//console.log(appService.application.state.session.ui.userProfile?.orgUnit)

const AsyncContent = defineAsyncComponent(() => import('../../components/mock-api.vue'))
</script>
