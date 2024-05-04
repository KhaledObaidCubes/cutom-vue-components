import { IoCLevelsEnum } from '../../../control'
import { Inject, Service } from 'cubes'
import { serviceMap } from '../../../service'
import { TRequestPayload } from 'cubes-ui/dist/types/lib/module/domain/meta/network'
import { IDataTypeService } from '../meta/i-data-type.service'
import { IDataType } from '@/app/domain/meta/i-data-type'
import { IDataTypeRepository } from '@/app/repository/meta/i-data-type.repo'
import type { TProxyResult } from '../../../control'

@Service(IoCLevelsEnum.DEV_2, serviceMap.DataTypeService.key)
class DataTypeService implements IDataTypeService {
  @Inject() DataTypeRepository!: IDataTypeRepository
  getAsync(query: TRequestPayload<{}>['query']): TProxyResult<IDataType> {
    return this.DataTypeRepository.getAsync(query)
  }
  postAsync(object: IDataType): TProxyResult<IDataType> {
    return this.DataTypeRepository.postAsync(object)
  }
  putAsync(object: IDataType): TProxyResult<IDataType> {
    return this.DataTypeRepository.postAsync(object)
  }
  deleteAsync(id: string): TProxyResult<IDataType> {
    return this.DataTypeRepository.deleteAsync(id)
  }
}

export default DataTypeService
