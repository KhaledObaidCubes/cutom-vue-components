import { Inject, Service } from 'cubes'
import { IoCLevelsEnum } from '../../../control'
import { repositoryMap, serviceMap } from '../../../service'
import { INetworkManager, TProxyResult } from 'cubes-ui'
import { IDataType } from '@/app/domain/meta/i-data-type'
import { TDataTypeClient } from '../proxy/data-type.proxy'
import { TRequestPayload } from 'cubes-ui/dist/types/lib/module/domain/meta/network'
import { IDataTypeRepository } from '../meta/i-data-type.repo'

@Service(IoCLevelsEnum.DEV_2, repositoryMap.DataTypeRepository.key)
class DataTypeRepository implements IDataTypeRepository {
  @Inject(serviceMap.NetworkManager.key) networkManager!: INetworkManager<TDataTypeClient>
  getAsync(query: TRequestPayload<{}>['query']): TProxyResult<IDataType> {
    return this.networkManager.clients.dataType.api.list({ query })
  }
  postAsync(object: IDataType): TProxyResult<IDataType> {
    return this.networkManager.clients.dataType.api.post(object)
  }
  putAsync(object: IDataType): TProxyResult<IDataType> {
    return this.networkManager.clients.dataType.api.post(object)
  }
  deleteAsync(id: string): TProxyResult<IDataType> {
    return this.networkManager.clients.dataType.api.delete({ id })
  }
}

export { DataTypeRepository }
