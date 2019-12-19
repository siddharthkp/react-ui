export const styles = {
  Stack: props => ({
    display: 'flex',
    flexDirection: props.direction === 'vertical' ? 'column' : 'row',
    '> *:not(:last-child)': {
      marginBottom: props.gap
    }
  })
}
