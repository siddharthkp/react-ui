export const styles = {
  paddingX: 2,
  height: 'Input',
  lineHeight: 'default',
  fontSize: 3,
  border: '2px solid',
  borderColor: 'grays.400',
  backgroundColor: 'grays.100',
  color: 'text.body',
  borderRadius: 2,
  boxSizing: 'border-box',
  width: '100%',
  '::placeholder': {
    color: 'text.subtle'
  },
  ':hover': {
    borderColor: 'blues.300'
  },
  ':focus': {
    outline: 'none',
    borderColor: 'blues.500',
    backgroundColor: 'blues.100'
  }
}
