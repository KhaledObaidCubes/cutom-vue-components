import { PropType } from 'vue'
import { TValidate } from './checkbox'
interface CheckBoxGroupObject {
  accent: TValidate
  checked: boolean
  caption: string
  description: string
  id: string
  iconName: string
}

type TGroupData = CheckBoxGroupObject[]
export const props = {
  isBulkAction: Boolean,
  groupCaption: String,
  dataModel: {} as PropType<TGroupData>,
  selected: Boolean,
  inline: Boolean
}
