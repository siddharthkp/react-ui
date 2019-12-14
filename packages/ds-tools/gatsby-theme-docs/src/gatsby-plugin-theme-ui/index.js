import theme from '../theme'

const nightOwl = {
  color: '#222',
  backgroundColor: '#fafafa',
  '.changed': {
    color: 'rgb(162, 191, 252)'
  },
  '.deleted': {
    color: '#EF5350'
  },
  '.inserted': {
    color: '#00a948'
  },
  '.attr-name': {
    color: '#0c969b'
  },
  '.comment': {
    color: '#989fb1',
    fontStyle: 'italic'
  },
  '.string,.url': {
    color: '#4876d6'
  },
  '.variable': {
    color: '#aa0982'
  },
  '.number': {
    color: 'rgb(247, 140, 108)'
  },
  '.attr-value': {
    color: 'rgb(247, 140, 108)'
  },
  '.builtin,.char,.constant,.function': {
    color: '#4876d6'
  },
  '.punctuation,.operator': {
    color: '#929FB1'
  },
  '.selector,.doctype': {
    color: 'rgb(199, 146, 234)',
    fontStyle: 'italic'
  },
  '.class-name': {
    color: '#4876d6'
  },
  // '.tag,.operator,.keyword': {
  // removed tag because it was applied to
  // everything, that's not a problem
  // with this theme, it's a bug in how
  // prism is applying classNames

  '.keyword': {
    color: '#0c969b'
  },
  '.boolean': {
    color: 'rgb(255, 88, 116)'
  },
  '.property': {
    color: 'rgb(128, 203, 196)'
  },
  '.namespace': {
    color: 'rgb(178, 204, 214)'
  }
}

export default {
  ...theme,
  styles: {
    div: {
      '&.example': {
        border: '1px solid #eee',
        borderRadius: '5px',
        marginY: '1em',
        overflow: 'hidden',

        pre: {
          margin: 0,
          borderRadius: 0,
          overflow: 'auto'
        },
        p: {
          margin: 0,
          img: {
            border: 'none'
          }
        },
        '&.code-first': {
          pre: {
            borderBottom: '1px solid #eee'
          }
        }
      }
    },
    p: {
      code: {
        backgroundColor: '#1b1f230d',
        color: '#347992',
        padding: '3px 6px',
        fontSize: '90%',
        borderRadius: '3px'
      }
    },
    img: {
      width: '100%',
      border: '1px solid #eee',
      borderRadius: '5px'
    },
    a: {
      color: '#217CC9'
    },
    pre: {
      ...nightOwl,
      padding: '1em',
      borderRadius: 2
    },
    hr: {
      border: '1px solid #22222220',
      marginY: '64px'
    }
  }
}
