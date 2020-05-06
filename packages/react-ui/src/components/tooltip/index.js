import React from 'react'
import PropTypes from 'prop-types'
import { useTooltip, TooltipPopup } from '@reach/tooltip'
import Portal from '@reach/portal'
import { Element } from '../../primitives'
import { merge } from '../../utils'
import { styles } from './tooltip.styles.js'

const Tooltip = React.forwardRef(({ label, css, ...props }, ref) => {
  const [trigger, tooltip] = useTooltip({
    DEBUG_STYLE: props.INTERNAL_DEBUG_MODE // this is an internal prop for docs, do not use!
  })
  const { isVisible, triggerRect } = tooltip

  return (
    <>
      {React.cloneElement(props.children, trigger)}

      {isVisible && <Triangle triggerRect={triggerRect} />}
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

const Triangle = ({ triggerRect }) => (
  <Portal>
    <Element
      as="span"
      component="TooltipTriangle"
      css={merge(styles.TooltipTriangle, {
        left:
          triggerRect &&
          triggerRect.left - 10 + triggerRect.width / 2 + 3 + 'px',
        top: triggerRect && triggerRect.bottom + window.scrollY - 4 + 'px'
      })}
    />
  </Portal>
)

Tooltip.displayName = 'Tooltip'

Tooltip.propTypes = {
  label: PropTypes.string.isRequired
}

export { Tooltip }
