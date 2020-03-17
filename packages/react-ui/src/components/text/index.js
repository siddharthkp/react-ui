import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { merge } from '../../../utils'

function Text({ size, color, align, weight, block, css, maxWidth, ...props }) {
  return (
    <Element
      as="span"
      component="Text"
      css={merge(
        {
          fontSize: size,
          textAlign: align,
          fontWeight: weight,
          color: color,
          display: block || props.marginBottom ? 'block' : 'inline',
          maxWidth: maxWidth,
          ...(maxWidth ? overflowStyles : {})
        },
        css
      )}
      {...props}
    />
  )
}

const overflowStyles = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}

Text.propTypes = {
  size: PropTypes.number,
  align: PropTypes.oneOf([
    'left',
    'right',
    'center',
    'justify',
    'inherit',
    'initial'
  ]),
  weight: PropTypes.string,
  color: PropTypes.string,
  block: PropTypes.bool
  // variant: PropTypes.oneOf(['default', 'subtle', 'danger']),
}

Text.defaultProps = {
  // we don't give default for size or align because we want the html default: inherit,
  // size: align: html default
}

export { Text }
