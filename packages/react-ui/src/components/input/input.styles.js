import styled from '@ds-tools/styled'

export const styles = {
  padding: 2,
  lineHeight: 'default',
  fontSize: 3,
  border: '2px solid',
  borderColor: 'grays.400',
  backgroundColor: 'grays.100',
  borderRadius: 2,
  boxSizing: 'border-box',
  width: '100%',
  ':hover': {
    borderColor: 'blues.300'
  },
  ':focus': {
    outline: 'none',
    borderColor: 'blues.500',
    backgroundColor: 'blues.100'
  }
}

export const Element = styled.input(styles)
