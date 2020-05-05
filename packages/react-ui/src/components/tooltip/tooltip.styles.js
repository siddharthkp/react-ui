export const styles = {
  Tooltip: {
    zIndex: 1,
    pointerEvents: 'none',
    position: 'absolute',

    // multiline
    maxWidth: 160,
    whiteSpace: 'normal',
    textAlign: 'center',

    ':before': {
      position: 'absolute',
      content: "' '",
      borderWidth: '6px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      top: '-12px',
      left: 'calc(50% - 6px)',
      // triangle color should match tooltip color
      borderBottomColor: theme =>
        theme.components.Tooltip && theme.components.Tooltip.backgroundColor
    }
  }
}
