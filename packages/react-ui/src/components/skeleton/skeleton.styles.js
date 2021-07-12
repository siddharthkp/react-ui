import { keyframes } from '@emotion/core'

const shine = keyframes`
  0% { background-position: 100% 50%; }
  100% { background-position: -100% 50%; }
`

export const styles = {
  Skeleton: {
    display: 'inline-block',
    backgroundSize: '200% 200%',
    animationName: `${shine}`,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  }
}
