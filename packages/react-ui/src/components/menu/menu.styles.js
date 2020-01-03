export const styles = {
  MenuButton: {
    appearance: 'none',
    backgroundColor: 'transparent',
    borderColor: 'grays.200',
    borderRadius: 1,
    paddingX: 2,
    paddingY: 1,
    color: 'text.link',
    fontSize: 3,
    ':hover': {
      backgroundColor: 'grays.200'
    },
    ':focus': {
      outline: 'none',
      backgroundColor: 'grays.200'
    },
    ':active': {
      border: '1px solid',
      borderColor: 'grays.200'
    }
  },
  MenuList: {
    borderColor: 'grays.200',
    paddingY: 0,
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: 3,
    minWidth: 120,
    '[data-reach-menu-item]': {
      paddingY: 2,
      paddingX: 3,
      '&[data-selected]': {
        backgroundColor: 'blues.200'
      }
    }
  }
}
