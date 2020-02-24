export const styles = {
  Input: {
    boxSizing: 'border-box',
    lineHeight: 1, // trust the input height
    width: '100%',
    border: '1px solid',
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  }
}
