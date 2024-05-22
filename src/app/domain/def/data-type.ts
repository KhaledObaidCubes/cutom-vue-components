import { Base, THashMap, clone, TOptional } from 'cubes'
import { IDataType } from '../meta/i-data-type'
import { defaultTranslatableFallback } from 'cubes-ui'

export class DataType extends Base<IDataType, 'id'> implements IDataType {
  constructor(json = {} as Partial<IDataType>) {
    super(json)
  }
  id: TOptional<string>
  name!: THashMap

  deserialize({ id, name, ...rest }: Partial<IDataType> = {}): void {
    super.deserialize(rest)
    this.id = id
    this.name = clone(name ?? defaultTranslatableFallback, true)
  }
}
