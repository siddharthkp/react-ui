import styled from '@ds-tools/styled'

export const styles = {
  paddingY: 2,
  border: 'none',
  width: '100%',
  backgroundColor: 'greens.700',
  color: 'white',
  border: '2px solid',
  borderColor: 'greens.700',
  fontSize: 3,
  lineHeight: 'default',
  borderRadius: 2,
  cursor: 'pointer',

  ':hover': {
    backgroundColor: 'greens.600',
    borderColor: 'greens.600'
  },
  ':focus': {
    outline: 'none',
    backgroundColor: 'greens.600'
  },
  ':active': {
    backgroundColor: 'greens.700'
  }
}

export const Element = styled.button(styles)
