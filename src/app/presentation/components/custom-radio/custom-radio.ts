import { PropType } from 'vue'

type TValid = 'is-valid' | 'is-invalid' | ''

export const props = {
  valid: {
    type: String as PropType<TValid>
  },
  caption: String,
  feedBack: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  id: String,
  groupName: String,
  checked: Boolean
}
