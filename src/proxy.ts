import { clientMaps as cubesAppClientMaps } from 'cubes-app'
import { clientMaps as cubesUiClientMaps } from 'cubes-ui'
//todo: import your app proxy imports here..
// import { myProxy } from './app/repository/proxy/myProxy.proxy'
//

import { customTable } from './app/repository/proxy/custom-table.proxy'
import { dataType } from './app/repository/proxy/data-type.proxy'

const clientMaps = {
  ...cubesUiClientMaps,
  ...cubesAppClientMaps,
  //todo:export your proxies here..
  //myProxy,
  customTable,
  dataType
}
export { clientMaps }
export type TClients = typeof clientMaps
