import React from 'react'
import { Input } from '../input'
import { styles } from './slider.styles'
import { merge } from '../../utils'

export const Slider = React.forwardRef(function Slider(
  { size, css, ...props },
  ref
) {

  return (
    <Input
      ref={ref}
      as="input"
      type="range"
      component="Slider"
      css={merge(styles.Slider, css)}
      {...props}
    />
  )
})

Slider.propTypes = {}

Slider.defaultProps = {}
