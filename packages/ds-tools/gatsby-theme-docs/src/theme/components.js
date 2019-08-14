export default {
  Sidebar: {
    backgroundColor: 'grays.0',
    top: 0,
    maxHeight: '100vh',
    borderRight: '1px solid',
    borderColor: 'grays.1'
  },
  CategoryHeader: {
    textTransform: 'uppercase',
    color: 'grays.6',
    letterSpacing: 1,
    fontSize: 1
  },
  List: {
    listStyle: 'none',
    paddingLeft: 0,
    marginBottom: 4
  },
  ListItem: {
    paddingLeft: 0,
    paddingY: 2,
    '& a': {
      textDecoration: 'none',
      color: 'blues.5',
      '&:hover': {
        color: 'blues.7'
      },
      '&[aria-current]': {
        color: 'blues.7'
      }
    }
  }
}
