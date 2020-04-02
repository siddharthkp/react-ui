export const styles = {
  MenuList: {
    paddingY: 0,
    minWidth: '120px',
    overflow: 'auto',
    // styles from reach
    display: 'block',
    whiteSpace: 'nowrap',
    outline: 'none'
  },
  MenuItem: {
    display: 'block',
    userSelect: 'none',
    cursor: 'pointer',
    '&[data-selected]': {
      outline: 'none'
    }
  }
}
