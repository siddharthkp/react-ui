import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './text.styles'
import { merge } from '../../../utils'

/** Description of an input */
function Text({ size, align, ...props }) {
  return (
    <>
      <Element
        as="span"
        component="Text"
        baseStyles={merge(styles.Text, {
          fontSize: size || 'inherit',
          textAlign: align
        })}
        {...props}
      />
    </>
  )
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
  variant: PropTypes.oneOf(['default', 'body', 'subtle', 'danger'])
}

Text.defaultProps = {
  // we don't give default for size or align because we want the html default: inherit,
  // size: align: html default
}

export { Text }
