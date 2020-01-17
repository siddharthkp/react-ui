export const styles = {
  MenuButton: {
    appearance: 'none',
    backgroundColor: 'transparent',
    borderColor: 'MenuButton.border',
    borderRadius: 1,
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight: 1,
    paddingX: 2,
    paddingY: 2,
    color: 'text.link',
    fontSize: 3,
    ':hover': {
      backgroundColor: 'MenuButton.backgroundHover'
    },
    ':focus': {
      outline: 'none',
      backgroundColor: 'MenuButton.backgroundFocus'
    },
    ':active': {
      border: '1px solid',
      borderColor: 'MenuButton.border'
    }
  },
  MenuList: {
    backgroundColor: 'Menu.background',
    borderColor: 'Menu.border',
    color: 'Menu.color',
    paddingY: 0,
    borderRadius: 2,
    marginTop: 1,
    boxShadow: 3,
    minWidth: '120px', // with units, because 120 is not on the scale
    maxHeight: '200px',
    overflow: 'auto',
    '[data-reach-menu-item]': {
      paddingY: 2,
      paddingX: 3,
      '&[data-selected]': {
        backgroundColor: 'Menu.backgroundSelected'
      }
    }
  }
}
