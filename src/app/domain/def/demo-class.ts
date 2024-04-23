import { uid, Base } from 'cubes'
import { IDemoClass } from '../meta/i-demo-class'

export class DemoClass extends Base<IDemoClass, 'id'> implements IDemoClass {
  id!: string
  strProperty!: string
  numProperty!: number
  booleanProperty!: boolean
  deserialize({ id = uid(), strProperty = '', numProperty = 0, booleanProperty = false }: Partial<IDemoClass> = {}): void {
    this.id = id
    this.strProperty = strProperty
    this.numProperty = numProperty
    this.booleanProperty = booleanProperty
  }
  setStr = (msg: string) => {
    this.strProperty = msg
  }
}
