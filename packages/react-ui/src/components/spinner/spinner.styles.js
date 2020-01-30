import { keyframes } from '@emotion/core'

const rotate = keyframes`
   0% { transform: rotate(0deg) }
  100% { transform: rotate(1turn) }
`

export const styles = {
  Spinner: {
    display: 'inline-block',
    border: '2px solid',
    borderRadius: '50%',
    animation: `0.8s infinite ${rotate}`,
    borderColor: 'white',
    borderLeftColor: 'black'
  }
}
