import styled from '@ds-tools/styled'

export const styles = {
  background: 'white',
  width: 400,
  margin: 'auto',
  boxShadow: 'small',
  paddingY: 4,
  borderRadius: 1,

  FormField: {
    border: 'none',
    padding: 'none',
    paddingX: 4,
    '&:not(:last-child)': {
      marginBottom: 3
    }
  },
  FormLabel: {
    color: 'grays.800',
    display: 'block',
    fontSize: 2,
    lineHeight: 'default',
    marginBottom: 1
  },
  FormHeader: {
    fontSize: 5,
    fontWeight: 'normal',
    marginX: 4,
    marginTop: 0,
    marginBottom: 4
  }
}

export const Element = styled.form(styles)
export const FormField = styled.fieldset(styles.FormField)
export const FormLabel = styled.label(styles.FormLabel)
export const FormHeader = styled.div(styles.FormHeader)
