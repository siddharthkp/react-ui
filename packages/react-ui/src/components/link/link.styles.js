export const styles = {
  color: props.href ? 'text.link' : 'text.body',
  textDecoration: 'none',
  ':hover': {
    color: props.href ? 'text.linkHover' : 'text.body'
  }
}
