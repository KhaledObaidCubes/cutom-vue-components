import { IDataType } from '@/app/domain/meta/i-data-type'
import type { TProxyResult } from '../../../control'
import { TRequestPayload } from 'cubes-ui/dist/types/lib/module/domain/meta/network'

interface IDataTypeRepository {
  getAsync(query: TRequestPayload<{}>['query']): TProxyResult<IDataType>
  postAsync(object: IDataType): TProxyResult<IDataType>
  putAsync(object: IDataType): TProxyResult<IDataType>
  deleteAsync(id: string): TProxyResult<IDataType>
}

export type { IDataTypeRepository }
