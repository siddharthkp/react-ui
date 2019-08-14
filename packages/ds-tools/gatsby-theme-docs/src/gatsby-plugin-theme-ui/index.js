import nightOwl from '@theme-ui/prism/presets/night-owl'
import theme from '../theme'

export default {
  ...theme,
  styles: {
    pre: {
      ...nightOwl,
      padding: 2,
      borderRadius: 2
    }
  }
}
