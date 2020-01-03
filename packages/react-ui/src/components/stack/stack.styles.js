export const styles = {
  Stack: props => ({
    display: 'flex',
    justifyContent: props.justify,
    alignItems: props.align,
    flexDirection: props.direction === 'vertical' ? 'column' : 'row',
    '> *:not(:last-child)': {
      marginBottom: props.direction === 'vertical' ? props.gap : 0
    }
  })
}
