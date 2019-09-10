import { concat } from 'react-ui/helpers'

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
    borderRadius: 1,
    border: concat('1px solid ', 'colors.avocado.2'),
    shadow: 'none',
    padding: 1,
    '&:focus': {
      borderColor: 'avocado.2'
    }
  },

  InputGroup: {}
}

export default components
