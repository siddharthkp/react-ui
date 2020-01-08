import base from 'react-ui/themes/dark'
import { merge } from 'react-ui/utils'

const theme = {
  colors: {
    Sidebar: {
      background: 'grays.800' // this should work
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
