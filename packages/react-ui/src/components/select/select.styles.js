export const caret =
  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMTAgMjQiIHdpZHRoPSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjNzU3NTc1Ij48cGF0aCBkPSJtNS4wMDAwNiAxNy0zLjAwMDA2LTRoNnoiLz48cGF0aCBkPSJtNC45OTk5NCA3IDMuMDAwMDYgNGgtNnoiLz48L2c+PC9zdmc+'

export const styles = {
  appearance: 'none',
  backgroundImage: `url(${caret})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '96% 50%',
  paddingX: 2,
  height: 'Input',
  lineHeight: 'default',
  fontSize: 3,
  border: '2px solid',
  borderColor: 'Input.border',
  backgroundColor: 'Input.background',
  borderRadius: 2,
  boxSizing: 'border-box',
  color: 'text.body',

  width: '100%',
  ':hover': {
    borderColor: 'Input.borderHover',
    backgroundColor: 'Input.backgroundHover'
  },
  ':focus': {
    outline: 'none',
    borderColor: 'Input.borderFocus',
    backgroundColor: 'Input.backgroundFocus'
  }
}
