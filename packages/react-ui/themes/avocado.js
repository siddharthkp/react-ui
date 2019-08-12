import { merge } from 'react-ui/helpers'
import base from 'react-ui/theme'

const components = {
  Button: {
    backgroundColor: 'avocado.1',
    borderColor: 'avocado.2',
    color: 'avocado.3',
    borderRadius: 1,
    paddingX: 2,
    paddingY: 1,
    '&:hover': {
      backgroundColor: 'avocado.2'
    }
  },

  ButtonGroup: {},

  DangerZone: {
    backgroundColor: 'pink',
    padding: 2
  },

  Form: {
    '&.inline input': {
      width: 80
    }
  },

  Heading: {
    color: 'avocado.3'
  },

  Input: {
    borderWidth: 1,
    borderRadius: 1,
    border: '1px solid',
    borderColor: 'avocado.2',
    shadow: 'none',
    paddingX: 1,
    paddingY: 1,
    '&:focus': {
      borderColor: 'avocado.2'
    }
  },

  InputGroup: {}
}

const theme = {
  components,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: [0, 2, 5, 10],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  colors: {
    white: '#fff',
    reds: [
      '#F8E4E4',
      '#EFA6A6',
      '#E06161',
      '#D95252',
      '#D12D2D',
      '#B41F1F',
      '#A20808',
      '#821919',
      '#5E1717'
    ],
    yellows: [
      '#FDF3D7',
      '#FAECC2',
      '#F8E8BA',
      '#FAE29F',
      '#FFD97E',
      '#F4CA64',
      '#CAA53D',
      '#8C6D1F',
      '#5C4813'
    ],
    blues: [
      '#EFF8FF',
      '#B7DBF7',
      '#A8D1F2',
      '#63A2D8',
      '#3793E0',
      '#217CC9',
      '#2368A2',
      '#1A4971',
      '#203D54'
    ],
    greens: [
      '#E3FCEC',
      '#A8EEC1',
      '#8FF2B2',
      '#4BE38C',
      '#22D66F',
      '#38C172',
      '#259D58',
      '#197741',
      '#145239'
    ],
    avocado: ['#E3FCEC', '#f6f791', '#92b73a', '#821919'],
    grays: [
      '#f5faff',
      '#E1E7EC',
      '#D1D9E0',
      '#C8D0D7',
      '#AEBECD',
      '#929FB1',
      '#6E7A8A',
      '#404B5A',
      '#202833'
    ]
  }
}

export default merge(theme, base)
