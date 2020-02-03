import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './text.styles'
import { merge } from '../../../utils'

function Text({ css, size, align, weight, color, ...props }) {
  return (
    <Element
      as="span"
      component="Text"
      baseStyles={styles.Text}
      css={merge(
        {
          fontSize: size,
          textAlign: align,
          fontWeight: weight,
          color: color
        },
        css
      )}
      {...props}
    />
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
  weight: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'body', 'subtle', 'danger'])
}

Text.defaultProps = {
  // we don't give default for size or align because we want the html default: inherit,
  // size: align: html default
}

export { Text }
