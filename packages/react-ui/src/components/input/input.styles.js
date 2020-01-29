export const styles = {
  Input: {
    paddingX: 2,
    height: 'Input',
    lineHeight: 'default',
    fontSize: 3,
    border: '2px solid',
    color: 'text.body',
    borderRadius: 2,
    boxSizing: 'border-box',
    width: '100%',
    '::placeholder': {
      color: 'text.subtle'
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  }
}
