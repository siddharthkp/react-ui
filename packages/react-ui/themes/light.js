const theme = {
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  radii: [0, 2, 5, 10],
  fontSizes: [0, 11, 12, 14, 16, 20, 24, 32, 48, 64, 72],
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
  // transition speeds in ms
  speeds: [0, '75ms', '100ms', '150ms', '200ms', '300ms', '500ms'],
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

theme.sizes = {
  ...theme.space,
  Input: theme.space[10]
}

theme.colors.text = {
  subtle: theme.colors.grays[700],
  body: theme.colors.grays[800],
  link: theme.colors.blues[500],
  linkHover: theme.colors.blues[600]
}

theme.colors.error = {
  background: theme.colors.reds[100],
  border: theme.colors.reds[300],
  text: theme.colors.reds[700]
}

export default theme
