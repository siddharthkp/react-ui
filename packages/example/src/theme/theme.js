import base from 'react-ui/themes/light'
// import components from './components'

const theme = {
  ...base,
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
  },
  components: {
    FormLabel: {
      textTransform: 'uppercase'
    }
  }
}

export default theme
