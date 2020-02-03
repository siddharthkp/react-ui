import { calc } from '../../../utils'

export const caret =
  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMTAgMjQiIHdpZHRoPSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjNzU3NTc1Ij48cGF0aCBkPSJtNS4wMDAwNiAxNy0zLjAwMDA2LTRoNnoiLz48cGF0aCBkPSJtNC45OTk5NCA3IDMuMDAwMDYgNGgtNnoiLz48L2c+PC9zdmc+'

export const styles = {
  appearance: 'none',
  backgroundImage: `url(${caret})`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionY: '50%',
  backgroundPositionX: calc('100% - 2') // match input padding
}
