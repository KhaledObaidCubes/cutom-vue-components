import { PropType } from 'vue'

type TAccent = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link'
type TSize = 'lg' | 'sm' | 'xs' | ''
type TMold = 'outline' | 'subtle'

export const khaloodProps = {
  accent: {
    type: String as PropType<TAccent>,
    default: 'primary'
  },
  size: {
    type: String as PropType<TSize>,
    default: ''
  },
  mold: {
    type: String as PropType<TMold>,
    default: ''
  }
}

// export { props }
