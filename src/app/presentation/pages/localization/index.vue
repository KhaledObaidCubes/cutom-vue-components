<template>
  <div>{{ useLocalize(appService, langSample, true, '-') }}</div>
</template>

<script setup lang="ts">
import { THashMap, IoC } from 'cubes'
import { Ref, ref } from 'vue'
import { useLocalize } from 'cubes-ui'
import { IAppContext } from '@/app/domain/meta/i-app'
import { AppContexts } from '@/control'
import { serviceMap } from '@/service'
import { IAppService } from '@/app/service/meta/i-app-service'

const appContext = IoC.DI().resolve<IAppContext>(AppContexts.appContext!)
const appService = appContext!.services[serviceMap.AppService.key] as IAppService
const langSample = ref({ ar: 'السلام عليكم', en: 'may peace be upon you' }) as Ref<THashMap>
</script>
