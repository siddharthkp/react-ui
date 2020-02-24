import common from './common'
import { merge } from '../utils'

const theme = {
  ...common,

  // based on elevation levels
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  ],

  colors: {
    white: '#fff',
    reds: {
      100: '#F8E4E4',
      200: '#EFA6A6',
      300: '#E06161',
      400: '#D95252',
      500: '#D12D2D',
      600: '#B41F1F',
      700: '#A20808',
      800: '#821919',
      900: '#5E1717'
    },
    yellows: {
      100: '#FDF3D7',
      200: '#FAECC2',
      300: '#F8E8BA',
      400: '#FAE29F',
      500: '#FFD97E',
      600: '#F4CA64',
      700: '#CAA53D',
      800: '#8C6D1F',
      900: '#5C4813'
    },
    blues: {
      100: '#EFF8FF',
      200: '#B7DBF7',
      300: '#A8D1F2',
      400: '#63A2D8',
      500: '#3793E0',
      600: '#217CC9',
      700: '#2368A2',
      800: '#1A4971',
      900: '#203D54'
    },
    greens: {
      100: '#E3FCEC',
      200: '#A8EEC1',
      300: '#8FF2B2',
      400: '#4BE38C',
      500: '#22D66F',
      600: '#38C172',
      700: '#259D58',
      800: '#197741',
      900: '#145239'
    },
    grays: {
      100: '#f5faff',
      200: '#E1E7EC',
      300: '#D1D9E0',
      400: '#C8D0D7',
      500: '#AEBECD',
      600: '#929FB1',
      700: '#6E7A8A',
      800: '#404B5A',
      900: '#202833'
    }
  }
}

// decisions

theme.colors.text = {
  subtle: 'grays.700',
  body: 'grays.800',
  link: 'blues.500',
  linkHover: 'blues.600'
}

theme.colors.error = {
  background: 'reds.100',
  border: 'reds.300',
  text: 'reds.700'
}

// component specific decisions

const components = {
  sizes: {
    Input: 10,
    Button: 10,
    Avatar: {
      small: 7,
      medium: 10,
      large: 15
    },
    Spinner: {
      small: 4,
      medium: 6,
      large: 8
    },
    Switch: 4
  },

  fontSizes: {
    Heading: {
      page: 8,
      section: 6,
      paragraph: 4
    }
  },

  colors: {
    App: {
      background: 'grays.100'
    },
    Form: {
      backgroundColor: 'white'
    },
    Menu: {
      backgroundSelected: 'grays.300'
    },

    Switch: {
      backgroundOff: 'grays.400',
      backgroundOn: 'greens.700'
    }
  },

  Avatar: {
    border: '2px solid',
    borderColor: 'grays.200'
  },

  Input: {
    backgroundColor: 'grays.100',
    borderColor: 'grays.400',
    ':hover': {
      backgroundColor: 'grays.100',
      borderColor: 'blues.300'
    },
    ':focus': {
      outline: 'none',
      backgroundColor: 'blues.100',
      borderColor: 'blues.500'
    },
    ':disabled': {
      // same as default
      backgroundColor: 'grays.100',
      borderColor: 'grays.400'
    },
    '&[aria-invalid]': {
      backgroundColor: 'reds.100',
      borderColor: 'reds.300'
    }
  },

  Link: {
    variants: {
      default: {
        color: 'text.link',
        ':hover, :focus': {
          color: 'text.linkHover'
        },
        '&[aria-current]': {
          color: 'text.linkHover'
        }
      },
      subtle: {
        color: 'text.body',
        textDecoration: 'none',
        ':hover': {
          color: 'text.linkHover'
        },
        '&[aria-current]': {
          color: 'text.link'
        },
        ':focus': {
          color: 'text.linkHover'
        }
      }
    }
  },

  Button: {
    variants: {
      primary: {
        backgroundColor: 'greens.700',
        color: 'white',
        borderColor: 'greens.700',
        ':hover': {
          backgroundColor: 'greens.600',
          borderColor: 'greens.600'
        },
        ':focus': {
          outline: 'none',
          backgroundColor: 'greens.600',
          borderColor: 'greens.700'
        },
        ':active': {
          backgroundColor: 'greens.800',
          borderColor: 'greens.800'
        }
      },
      secondary: {
        backgroundColor: 'grays.300',
        color: 'text.body',
        borderColor: 'grays.300',
        ':hover': {
          backgroundColor: 'grays.200',
          borderColor: 'grays.200'
        },
        ':focus': {
          outline: 'none',
          backgroundColor: 'grays.200',
          borderColor: 'grays.400'
        },
        ':active': {
          backgroundColor: 'grays.400',
          borderColor: 'grays.400'
        }
      },
      destructive: {
        backgroundColor: 'reds.600',
        color: 'white',
        borderColor: 'reds.600',
        ':hover': {
          backgroundColor: 'reds.500',
          borderColor: 'reds.500'
        },
        ':focus': {
          outline: 'none',
          backgroundColor: 'reds.600',
          borderColor: 'reds.900'
        },
        ':active': {
          backgroundColor: 'reds.700',
          borderColor: 'reds.700'
        }
      },
      link: {
        backgroundColor: 'transparent',
        color: 'text.link',
        borderColor: 'transparent',
        ':hover': {
          color: 'text.linkHover',
          textDecoration: 'underline'
        },
        ':focus': {
          outline: 'none',
          textDecoration: 'underline',
          backgroundColor: 'grays.200'
        },
        ':active': {
          color: 'text.linkHover',
          backgroundColor: 'grays.200'
        }
      }
    }
  },
  Spinner: {
    borderColor: 'grays.200',
    borderLeftColor: 'grays.600'
  },
  Text: {
    variants: {
      default: { color: 'inherit' },
      subtle: { color: 'text.subtle' },
      danger: { color: 'error.text' }
    }
  }
}

export default merge(theme, components)
