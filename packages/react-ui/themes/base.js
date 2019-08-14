const theme = {
  components: {
    Button: {
      zIndex: 1,
      fontSize: 2
    },

    ButtonGroup: {
      display: 'flex',
      '& > button:focus': {
        position: 'relative',
        zIndex: 2
      },
      '& > button:first-of-type': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      '& > button:not(:first-of-type):not(:last-of-type)': {
        borderRadius: 0,
        borderLeftWidth: 0
      },
      '& > button:last-of-type': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeftWidth: 0
      }
    },
    Heading: {
      margin: 0
    },
    Input: {
      fontSize: 2
    },
    InputGroup: {
      display: 'flex',
      '& > *:focus': {
        position: 'relative',
        zIndex: 2
      },
      '& > :first-child': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      '& > *:not(:first-child):not(:last-child)': {
        borderRadius: 0,
        borderLeftWidth: 0
      },
      '& > *:last-child': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeftWidth: 0
      }
    },
    Paragraph: {
      margin: 0
    }
  }
}

// node friendly export
module.exports = theme
