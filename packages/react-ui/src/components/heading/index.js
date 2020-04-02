import delve from 'dlv'
import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../../primitives'
import { styles } from './heading.styles'
import { merge } from '../../../utils'

/** Description of an input */
function Heading({ size, css, ...props }) {
  return (
    <Element
      as="h1"
      component="Heading"
      css={merge(
        styles.Heading,
        { fontSize: getWithFallback(`fontSizes.Heading.${size}`, size) },
        css
      )}
      {...props}
    />
  )
}

const getWithFallback = (value, fallback) => theme => {
  const valueIfDefined = delve(theme, value)
  return valueIfDefined || fallback
}

Heading.propTypes = {
  /** Description of an Heading prop */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Heading.defaultProps = {
  as: 'h1'
}

export { Heading }
