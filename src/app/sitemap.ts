import { profilePage } from 'cubes-app'
import { sessionRoutes } from 'cubes-ui'

const Index = () => import('./presentation/pages/index/index.vue')
const customTable = () => import('./presentation/pages/table/index.vue')
const decorator = () => import('./presentation/pages/decorator/index.vue')
const animate = () => import('./presentation/pages/animate/index.vue')
const asyncButton = () => import('./presentation/pages/async-button/async-button.vue')
const vAsync = () => import('./presentation/pages/async/async.vue')
const cublicateBtn = () => import('./presentation/pages/cublicate-btn/cublicate-btn.vue')
const customAsync = () => import('./presentation/pages/new-async/new-async.vue')
const customRadio = () => import('./presentation/pages/radio-btn/index.vue')
const radioGroup = () => import('./presentation/pages/radio-group/index.vue')
const checkBox = () => import('./presentation/pages/checkbox/index.vue')
const animatedCounter = () => import('./presentation/pages/animated-number/index.vue')
const singletonObject = () => import('./presentation/pages/singleton-object/index.vue')
const refControllerPage = () => import('./presentation/pages/ref-page/index.vue')

const indexRoute = {
  path: '/',
  name: 'index',
  component: Index,
  meta: {
    title: { en: 'custom button', ar: 'زر مخصص' },
    icon: 'star'
  }
}
const decoratorTest = {
  path: '/decorator',
  name: 'decorator',
  component: decorator,
  meta: {
    title: { en: 'validatable', ar: 'تحقق' },
    icon: 'home'
  }
}
const tableRoute = {
  path: '/table',
  name: 'table',
  component: customTable,
  meta: {
    title: { en: 'custom table', ar: 'جدول مخصص' }
  }
}
const asyncBotn = {
  path: '/Animate',
  name: 'Animate',
  component: animate,
  meta: {
    title: { en: 'Animation', ar: 'لللل ' }
  }
}
const vAsyncEx = {
  path: '/vAsync',
  name: 'vAsync',
  component: vAsync,
  meta: {
    title: { en: 'VAsunc', ar: 'لللل ' }
  }
}
const animateObjects = {
  path: '/async-button',
  name: 'async-button',
  component: asyncButton,
  meta: {
    title: { en: 'Async button', ar: 'لللل ' }
  }
}
const dublcate = {
  path: '/cublicate-button',
  name: 'cublicate-button',
  component: cublicateBtn,
  meta: {
    title: { en: 'cublicate button', ar: 'لللل ' }
  }
}
const newAsync = {
  path: '/custom-async',
  name: 'custom-async',
  component: customAsync,
  meta: {
    title: { en: 'custom-async', ar: 'لللل ' }
  }
}
const radioBtn = {
  path: '/custom-radio',
  name: 'custom-radio',
  component: customRadio,
  meta: {
    title: { en: 'custom Radio', ar: 'لللل ' }
  }
}
const radioGroupPage = {
  path: '/custom-group',
  name: 'custom-group',
  component: radioGroup,
  meta: {
    title: { en: 'custom group', ar: 'لللل ' }
  }
}
const checkboxComp = {
  path: '/check-box',
  name: 'check-box',
  component: checkBox,
  meta: {
    title: { en: 'checkbox', ar: 'لللل ' }
  }
}
const singletonPage = {
  path: '/singleton',
  name: 'singleton',
  component: singletonObject,
  meta: {
    title: { en: 'Singleton', ar: 'لللل ' },
    icon: 'link'
  }
}
const animatedNumber = {
  path: '/animated-counter',
  name: 'animated-counter',
  component: animatedCounter,
  meta: {
    title: { en: 'Animated Counter', ar: 'لللل ' }
  }
}
const refPage = {
  path: '/ref-page',
  name: 'ref-page',
  component: refControllerPage,
  meta: {
    title: { en: 'Ref page', ar: 'لللل ' },
    icon: 'star'
  }
}

const routes = [
  refPage,
  singletonPage,
  animatedNumber,
  checkboxComp,
  radioGroupPage,
  radioBtn,
  newAsync,
  dublcate,
  vAsyncEx,
  asyncBotn,
  animateObjects,
  tableRoute,
  indexRoute,
  decoratorTest,
  ...sessionRoutes,
  //todo: add your routes here..
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]
if (window['configure']().secure) routes.splice(routes.length - 2, 0, profilePage as any)
export default routes
