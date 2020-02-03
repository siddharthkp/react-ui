export const styles = {
  MenuList: {
    backgroundColor: 'white',
    paddingY: 0,
    borderRadius: 2,
    marginTop: 1,
    boxShadow: 3,
    minWidth: '120px',
    maxHeight: '200px',
    overflow: 'auto'
  },
  MenuItem: {
    paddingY: 2,
    paddingX: 3,
    '&[data-selected]': {
      color: 'inherit',
      backgroundColor: 'Menu.backgroundSelected'
    }
  }
}
