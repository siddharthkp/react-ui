import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../primitives'
import { styles } from './switch.styles'
import { merge } from '../../utils'

const Switch = React.forwardRef(function Switch({ css, ...props }, ref) {
  return (
    <Element
      as="label"
      css={merge(styles.SwitchContainer, css)}
      component="SwitchContainer"
    >
      <Element
        ref={ref}
        as="input"
        type="checkbox"
        css={styles.SwitchInput}
        component="SwitchInput"
        checked={props.value}
        defaultChecked={props.defaultValue}
        {...props}
      />
      <Element
        as="span"
        css={styles.SwitchBackground}
        component="SwitchBackground"
      >
        <Element as="span" css={styles.SwitchToggle} component="SwitchToggle" />
      </Element>
    </Element>
  )
})

Switch.propTypes = {
  value: PropTypes.bool,
  defaultValue: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

Switch.defaultProps = {}

export { Switch }
