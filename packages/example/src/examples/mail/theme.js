import base from 'react-ui/themes/light'
import { merge } from 'react-ui/utils'

const theme = {
  colors: {
    Sidebar: {
      // light
      background: 'white',
      backgroundHover: 'grays.200',
      backgroundFocus: 'grays.200',
      border: 'grays.200'

      // dark
      // background: 'grays.800',
      // backgroundHover: 'grays.900',
      // backgroundFocus: 'grays.900',
      // border: 'grays.1000'
    }
  },
  components: {
    FormLabel: {
      textTransform: 'uppercase'
    }
  },
  variants: {
    badges: {
      starred: {
        backgroundColor: 'yellows.100',
        color: 'yellows.800'
      },
      sent: {
        backgroundColor: 'greens.100',
        color: 'greens.800'
      },
      spam: {
        backgroundColor: 'reds.100',
        color: 'reds.800'
      },
      default: {
        backgroundColor: 'grays.300',
        color: 'grays.800'
      }
    }
  }
}

export default merge(base, theme)
