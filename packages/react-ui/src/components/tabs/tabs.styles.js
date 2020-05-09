export const styles = {
  Tabs: {
    width: '100%'
  },
  TabList: {
    display: 'flex',
    borderBottom: '1px solid'
  },
  Tab: {
    appearance: 'none',
    border: 'none',
    background: 'none',
    paddingX: 0,
    marginBottom: '-1px',
    borderBottom: '1px solid transparent',
    ':hover': {
      cursor: 'pointer'
    },
    '&[data-selected]': {
      borderBottom: '1px solid currentColor'
    }
  }
}
