export const styles = {
  Stack: props => ({
    display: props.inline ? 'inline-flex' : 'flex',
    // width: '100%', // causes weirdness in nested avatar. todo: debug
    justifyContent: props.justify,
    alignItems: props.align,
    flexDirection: props.direction === 'vertical' ? 'column' : 'row',
    '> *:not(:last-child)': {
      [props.direction === 'vertical'
        ? 'marginBottom'
        : 'marginRight']: props.gap
    }
  })
}
