export const styles = {
  Button: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'Button',
    border: '2px solid',
    fontSize: 3,
    paddingX: 3,
    lineHeight: 'default',
    borderRadius: 1,
    cursor: 'pointer',
    transition: 'all 150ms',
    ':disabled': {
      opacity: 0.5
    }
  }
}
