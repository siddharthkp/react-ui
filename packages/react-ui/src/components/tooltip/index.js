import React from 'react'
import PropTypes from 'prop-types'
import { useTooltip, TooltipPopup } from '@reach/tooltip'
import { Element } from '../../primitives'
import { merge } from '../../utils'
import { styles } from './tooltip.styles.js'

const Tooltip = React.forwardRef(({ label, css, ...props }, ref) => {
  const [trigger, tooltip] = useTooltip()

  return (
    <>
      {React.cloneElement(props.children, trigger)}
      <Element
        as={TooltipPopup}
        component="Tooltip"
        label={label}
        position={centered}
        {...tooltip}
        {...props}
        css={merge(styles.Tooltip, css)}
      />
    </>
  )
})

// center the tooltip with respect to the trigger
const centered = (triggerRect, tooltipRect) => {
  const triggerCenter = triggerRect.left + triggerRect.width / 2
  const left = triggerCenter - tooltipRect.width / 2
  const maxLeft = window.innerWidth - tooltipRect.width - 2
  return {
    left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
    top: triggerRect.bottom + 8 + window.scrollY
  }
}

Tooltip.displayName = 'Tooltip'

Tooltip.propTypes = {
  label: PropTypes.string.isRequired
}

export { Tooltip }
