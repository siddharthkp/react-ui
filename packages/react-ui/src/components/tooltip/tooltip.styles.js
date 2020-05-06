export const styles = {
  Tooltip: {
    zIndex: 1,
    pointerEvents: 'none',
    position: 'absolute',
    // multiline
    maxWidth: 160,
    whiteSpace: 'normal',
    textAlign: 'center'
  },
  TooltipTriangle: {
    position: 'absolute',
    zIndex: 2, // one heigher than the tooltip itself
    width: 0,
    height: 0,
    border: '6px solid transparent',
    // triangle color should match tooltip color
    borderBottomColor: theme =>
      theme.components.Tooltip && theme.components.Tooltip.backgroundColor
  }
}
