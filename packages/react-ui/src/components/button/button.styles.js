export const styles = {
  Button: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    minWidth: 'fit-content',
    lineHeight: 0, // trust height and flex for alignment
    cursor: 'pointer',
    transitionProperty: 'background-color, color, border-color',
    transitionDuration: 3,
    ':disabled': {
      opacity: 0.5
    }
  }
}
