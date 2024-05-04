//@ts-nocheck
const services = require.context(
  // Look for files in the current directory
  '.',
  //  look in subdirectories
  true,
  // Only include .ts files
  /\.(service|repo)\.ts$/
)

import { serviceMap as cubesServiceMap } from 'cubes-app'

const serviceMap = {
  ...cubesServiceMap,
  //todo: add your application service keys/config here
  //MyService: { key: 'MyService', config: {} },
  CustomTableService: { key: 'CustomTableService', config: {} },
  DataTypeService: { key: 'DataTypeService', config: {} }
}
const repositoryMap = {
  //todo: add your application repository keys/config here
  //MyRepository: { key: 'MyRepository', config: {} },
  CustomTableRepository: { key: 'CustomTableRepository', config: {} },
  DataTypeRepository: { key: 'DataTypeRepository', config: {} }
}
type BoilerplateServiceMap = typeof serviceMap
export { services, serviceMap, repositoryMap }
export type { BoilerplateServiceMap }
