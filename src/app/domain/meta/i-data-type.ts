import { THashMap, TIdentifieable, TOptional, TSerializable } from 'cubes'

interface IDataType extends TSerializable<TIdentifieable<{ id: TOptional<string> }, 'id'>> {
  name: THashMap
}
export type { IDataType }
