import { Base, EMPTY_GUID, THashMap, clone } from 'cubes'
import { IDataType } from '../meta/i-data-type'
import { defaultTranslatableFallback } from 'cubes-ui'

export class DataType extends Base<IDataType, 'id'> implements IDataType {
  id!: string
  name!: THashMap

  deserialize({ id = EMPTY_GUID, name, ...rest }: Partial<IDataType> = {}): void {
    super.deserialize(rest)
    this.id = id
    this.name = clone(name ?? defaultTranslatableFallback, true)
  }
}
