export const styles = {
  paddingX: 2,
  height: 'Input',
  lineHeight: 'default',
  fontSize: 3,
  border: '2px solid',
  borderColor: 'Input.border',
  backgroundColor: 'Input.background',
  color: 'text.body',
  borderRadius: 2,
  boxSizing: 'border-box',
  width: '100%',
  '::placeholder': {
    color: 'text.subtle'
  },
  ':hover': {
    borderColor: 'Input.borderHover',
    backgroundColor: 'Input.backgroundHover'
  },
  ':focus': {
    outline: 'none',
    borderColor: 'Input.borderFocus',
    backgroundColor: 'Input.backgroundFocus'
  }
}
