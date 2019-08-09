const components = {
  Button: {
    backgroundColor: 'avocado.1',
    borderColor: 'avocado.2',
    color: 'reds.7',
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
    color: 'reds.7'
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

// export default components
module.exports = components
