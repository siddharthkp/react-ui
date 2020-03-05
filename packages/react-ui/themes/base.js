/* 
  Tokens: 
  Define your scales first
*/

const tokens = {
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
  radii: [0, '2px', '4px', '50%'],
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

  durations: [0, '75ms', '100ms', '150ms', '200ms', '300ms', '500ms', '1000ms'],

  // based on elevation levels
  shadows: {
    0: 'none',
    1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    4: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },

  colors: {}
}

// recommended: use the same space grid for size
tokens.sizes = { ...tokens.space }

/* 
  Decisions: 
  You can create aliases in scales based on the scale.
*/

tokens.fontSizes.Heading = {
  page: 8, // reads from tokens.fontSizes.8
  section: 6,
  paragraph: 4
}

// we define these at the tokens level
// so that they can be used by other
// components as well
tokens.colors.text = {
  body: 'black',
  link: 'blue',
  subtle: 'grey',
  error: 'red'
}

/* 
  Component styles:
  You can define styles, sizes and variants here
*/

const components = {
  /** Atoms */

  Avatar: {
    sizes: { small: 6, medium: 8, large: 12 }
  },
  Button: {
    sizes: { small: 6, medium: 8, large: 10 },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 3,
    variants: {
      primary: {
        // primary is the default variant for buttons
      },
      secondary: {
        backgroundColor: 'black',
        color: 'white'
      },
      link: {
        color: 'text.link',
        border: 'none',
        background: 'none'
      }
    }
  },
  Heading: {},
  Image: {},
  Input: {
    // recommended: match sizes of input and buttons so
    // that they go well together in forms next to other
    sizes: { small: 6, medium: 8, large: 10 },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    backgroundColor: 'white',
    borderColor: 'black',
    color: 'text.body',
    '::placeholder': {
      color: 'text.subtle'
    },
    '&[aria-invalid]': {
      borderColor: 'red'
    }
  },
  Link: {
    variants: {
      default: {
        color: 'blue',
        ':hover': { color: 'darkblue' }
      },
      subtle: {
        color: 'grey', // match Text.variants.subtle
        ':hover': { color: 'darkblue' }
      }
    }
  },
  Select: {
    // recommended: match styles of input
    sizes: { small: 6, medium: 8, large: 10 },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    backgroundColor: 'white',
    borderColor: 'black',
    color: 'text.body',
    '&[aria-invalid]': {
      borderColor: 'red'
    }
  },
  Spinner: {
    sizes: { small: 2, medium: 4, large: 6 },
    borderColor: 'white',
    borderLeftColor: 'black'
  },
  Switch: {
    colors: {
      backgroundOff: 'grey',
      backgroundOn: 'green'
    }
  },
  Text: {
    variants: {
      default: { color: 'inherit' },
      body: { color: 'text.body' },
      subtle: { color: 'text.subtle' },
      danger: { color: 'text.error' }
    }
  },
  Textarea: {
    // recommended: match styles of input
    sizes: { small: 6, medium: 8, large: 10 },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    paddingY: 2,
    backgroundColor: 'white',
    color: 'text.body',
    '::placeholder': {
      color: 'text.subtle'
    },
    '&[aria-invalid]': {
      borderColor: 'red'
    }
  },

  /** Molecules */

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
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: 'silver',
    padding: 5,
    borderRadius: 2,
    boxShadow: 2
  },
  Form: {
    paddingY: 4
  },
  FormLabel: {
    fontSize: 2,
    marginBottom: 1
  },
  FormHeader: {
    color: 'text.body',
    fontSize: 5,
    fontWeight: 'normal',
    marginBottom: 4
  },
  MenuList: {
    backgroundColor: 'white',
    borderRadius: 2,
    marginTop: 1,
    boxShadow: 3
  },
  MenuItem: {
    paddingY: 2,
    paddingX: 3,
    '&[data-selected]': {
      backgroundColor: 'blues.700',
      color: 'white'
    }
  },
  Paragraph: {}
}

export { tokens, components }
