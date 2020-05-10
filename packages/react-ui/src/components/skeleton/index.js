import React from 'react'
import delve from 'dlv'
import PropTypes from 'prop-types'
import { Element } from '../../primitives'
import { styles } from './skeleton.styles'
import { merge } from '../../utils'

const getLinearBackground = theme => {
  /** Read special keys from theme but make sure
   * it doesn't break if the keys aren't present
   * */
  const backgroundColor =
    delve(theme.components, 'Skeleton.backgroundColor', '')
  const highlightColor =
    delve(theme.components, 'Skeleton.highlightColor') || ''

  const background = delve(theme.colors, backgroundColor) || backgroundColor
  const highlight = delve(theme.colors, highlightColor) || highlightColor

  return `linear-gradient(90deg,
    ${background} 0%,
    ${background} 20%,
    ${highlight} 50%,
    ${background} 80%,
    ${background} 100%
  )`
}

export const Skeleton = React.forwardRef(function Skeleton(
  { css, width, ...props },
  ref
) {
  return (
    <Element
      ref={ref}
      as="span"
      component="Skeleton"
      css={merge(
        { width, background: getLinearBackground },
        styles.Skeleton,
        css
      )}
      {...props}
    />
  )
})

Skeleton.propTypes = {
  width: PropTypes.number
}

Skeleton.defaultProps = {
  width: 200
}
