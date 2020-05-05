import React from 'react'
import PropTypes from 'prop-types'
import ReachTooltip from '@reach/tooltip'
import { Element } from '../../primitives'
import { merge } from '../../utils'
import { styles } from './tooltip.styles.js'

const Tooltip = React.forwardRef((props, ref) => {
  return (
    <Element
      ref={ref}
      as={ReachTooltip}
      component="Tooltip"
      {...props}
      css={merge(styles.Tooltip, props.css)}
    />
  )
})

Tooltip.displayName = 'Tooltip'

Tooltip.propTypes = {
  label: PropTypes.string
}

export { Tooltip }
