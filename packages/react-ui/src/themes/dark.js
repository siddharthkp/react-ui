const tokens = {
  name: 'React UI Dark',
  space: {
    0: 0,
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px'
  },
  radii: [0, '2px', '4px', '16px', '50%'],
  fontSizes: {
    0: 0,
    1: '10px',
    2: '12px',
    3: '14px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '32px',
    8: '48px',
    9: '64px',
    10: '72px'
  },
  fontWeights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    compact: '1.2',
    default: '1.6',
    cosy: '2'
  },
  breakpoints: {
    0: '576px',
    1: '768px',
    2: '992px'
  },

  durations: {
    0: 0,
    1: '75ms',
    2: '100ms',
    3: '150ms',
    4: '200ms',
    5: '300ms',
    6: '500ms',
    7: '1000ms',
    8: '2500ms'
  },

  // based on elevation levels
  shadows: {
    0: 'none',
    1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    4: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },

  colors: {
    white: '#fff',
    black: '#000',
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
      400: '#66B8FF',
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
      900: '#202833',
      1000: '#151515'
    }
  },
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  ]
}

// recommended: use the same space grid for size
tokens.sizes = { ...tokens.space }

// decisions

/* 
  Decisions: 
  You can create aliases in scales based on the scale.
*/

tokens.colors.text = {
  subtle: 'grays.500',
  body: 'grays.100',
  link: 'blues.400',
  linkHover: 'blues.500'
}

tokens.colors.error = {
  background: 'reds.100',
  border: 'reds.300',
  text: 'reds.600'
}

tokens.colors.App = {
  backgroundColor: 'grays.900',
  color: 'grays.100',
  borderColor: 'grays.800'
}

tokens.fontSizes.Heading = {
  page: 8, // reads from tokens.fontSizes.8
  section: 6,
  paragraph: 4
}

/* 
  Component styles:
  You can define styles, sizes and variants here
*/

const components = {
  /** Global */
  Global: {
    ':root': {
      background: 'grays.900',
      color: 'text.body'
    }
  },

  /** Atoms */

  Avatar: {
    sizes: { small: 7, medium: 10, large: 15 },
    border: '2px solid',
    borderColor: 'grays.700'
  },
  Button: {
    fontSize: 3,
    borderRadius: 1,
    paddingX: 3,
    border: '1px solid',

    sizes: { small: 6, medium: 8, large: 10 },
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
          boxShadow: 1,
          backgroundColor: 'greens.600',
          borderColor: 'greens.700'
        },
        ':active': {
          backgroundColor: 'greens.800',
          borderColor: 'greens.800'
        }
      },
      secondary: {
        backgroundColor: 'grays.800',
        color: 'text.body',
        borderColor: 'grays.800',
        ':hover': {
          backgroundColor: 'grays.700',
          borderColor: 'grays.700'
        },
        ':focus': {
          outline: 'none',
          boxShadow: 1,
          backgroundColor: 'grays.700',
          borderColor: 'grays.800'
        },
        ':active': {
          backgroundColor: 'grays.800',
          borderColor: 'grays.800'
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
          boxShadow: 1,
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
          color: 'text.linkHover'
        },
        ':focus': {
          outline: 'none',
          color: 'text.linkHover'
        },
        ':active': {
          color: 'text.linkHover'
        }
      }
    }
  },
  Checkbox: {
    border: '1px solid'
  },
  Heading: {
    /** fontSizes for heading are defined in tokens.fontSizes.Heading */
    color: 'text.body'
  },
  Image: {},

  Input: {
    // recommended: match sizes of input and buttons so
    // that they go well together in forms next to other
    sizes: { small: 6, medium: 8, large: 10 },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    backgroundColor: 'grays.800',
    borderColor: 'black',
    color: 'text.body',
    '::placeholder': {
      color: 'text.subtle'
    },
    ':hover:not(:disabled)': {
      borderColor: 'blues.800'
    },
    ':focus:not(:disabled)': {
      outline: 'none',
      borderColor: 'blues.500'
    },
    '&[aria-invalid]': {
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
        color: 'text.subtle',
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
      },
      body: {
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

  Select: {
    // recommended: match styles of input
    sizes: { small: 6, medium: 8, large: 10 },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    backgroundColor: 'grays.800',
    borderColor: 'black',
    color: 'text.body',
    '::placeholder': {
      color: 'text.subtle'
    },
    ':hover:not(:disabled)': {
      borderColor: 'blues.800'
    },
    ':focus:not(:disabled)': {
      outline: 'none',
      borderColor: 'blues.500'
    },
    '&[aria-invalid]': {
      borderColor: 'reds.300'
    }
  },

  Skeleton: {
    backgroundColor: 'grays.800',
    highlightColor: 'grays.900',
    height: 4,
    borderRadius: 2,
    animationDuration: 8
  },

  Spinner: {
    sizes: { small: 4, medium: 6, large: 8 },
    borderColor: 'grays.700',
    borderLeftColor: 'grays.400'
  },

  Switch: {
    sizes: {
      medium: 4
    },
    colors: {
      backgroundOff: 'grays.800',
      backgroundOn: 'greens.600'
    }
  },
  Text: {
    variants: {
      default: { color: 'inherit' },
      body: { color: 'text.body' },
      subtle: { color: 'text.subtle' },
      danger: { color: 'error.text' }
    }
  },

  Textarea: {
    // recommended: match styles of input
    sizes: { small: 6, medium: 8, large: 10 },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    paddingY: 2,
    backgroundColor: 'grays.800',
    borderColor: 'black',
    color: 'text.body',
    '::placeholder': {
      color: 'text.subtle'
    },
    ':hover:not(:disabled)': {
      borderColor: 'blues.800'
    },
    ':focus:not(:disabled)': {
      outline: 'none',
      borderColor: 'blues.500'
    },
    '&[aria-invalid]': {
      borderColor: 'reds.300'
    }
  },

  /** Molecules */

  Alert: {
    fontSize: 3,
    borderRadius: 1,
    padding: 4,
    border: '1px solid',
    variants: {
      default: {
        backgroundColor: 'grays.800',
        color: 'text.body',
        borderColor: 'grays.700'
      },
      warning: {
        backgroundColor: 'yellows.100',
        color: 'yellows.900',
        borderColor: 'yellows.500'
      },
      success: {
        backgroundColor: 'greens.100',
        color: 'greens.900',
        borderColor: 'greens.200'
      },
      destructive: {
        backgroundColor: 'reds.100',
        color: 'reds.900',
        borderColor: 'reds.200'
      },
      info: {
        backgroundColor: 'blues.200',
        color: 'blues.900',
        borderColor: 'blues.300'
      }
    }
  },
  Breadcrumb: {
    fontSize: 3
  },
  BreadcrumbSeparator: {
    display: 'inline-block',
    color: 'text.subtle',
    paddingX: 2
  },
  BreadcrumbItem: {
    display: 'inline-block',
    '&[aria-current]': {
      color: 'text.body'
    }
  },
  Card: {
    width: '500px',
    backgroundColor: 'grays.900',
    border: '1px solid',
    borderColor: 'grays.800',
    padding: 5,
    borderRadius: 2,
    boxShadow: 2,
    overflow: 'hidden'
  },
  DialogContent: {
    backgroundColor: 'grays.900',
    border: '1px solid',
    borderColor: 'grays.800',
    padding: 6,
    borderRadius: 2,
    boxShadow: 4
  },
  DialogOverlay: {
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  Form: {
    paddingY: 4
  },
  FormLabel: {
    fontSize: 2,
    marginBottom: 1,
    color: 'text.body'
  },
  FormHeader: {
    color: 'text.body',
    fontSize: 5,
    fontWeight: 'normal'
  },
  MenuList: {
    backgroundColor: 'grays.900',
    color: 'text.body',
    border: '1px solid',
    borderColor: 'grays.800',
    borderRadius: 2,
    fontSize: 3,
    marginTop: 1,
    boxShadow: 3
  },
  MenuItem: {
    paddingY: 2,
    paddingX: 3,
    '&[data-selected]': {
      backgroundColor: 'blues.500',
      color: 'grays.100'
    }
  },
  Paragraph: {},
  TabList: {
    borderColor: 'grays.800'
  },
  Tab: {
    outline: 'none',
    fontSize: 3,
    height: 8,
    marginRight: 6,
    color: 'text.body',
    ':hover': {
      color: 'text.link'
    },
    '&[data-selected]': {
      color: 'text.link'
    }
  },
  TabPanel: {
    fontSize: 3,
    paddingY: 4,
    outline: 'none'
  },
  Tooltip: {
    backgroundColor: 'grays.100',
    color: 'grays.900',
    borderRadius: 1,
    boxShadow: 2,
    paddingX: 1,
    paddingY: 1,
    fontSize: 2,
    lineHeight: 1
  },
  Slider: {
    colors: {
      backgroundTrack: 'grays.800',
      backgroundThumb: 'greens.600'
    },
  }
}

const theme = { tokens, components }

export default theme
export { tokens, components }
