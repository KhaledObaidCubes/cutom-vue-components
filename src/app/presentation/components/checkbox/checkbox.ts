import { PropType } from 'vue'
export type TValidate = 'is-valid' | 'is-invalid' | 'muted'

export const props = {
  indeterminate: Boolean,
  accent: String as PropType<TValidate>,
  checked: Boolean,
  caption: String,
  description: String,
  id: String,
  iconName: String,
  inline: Boolean
}
