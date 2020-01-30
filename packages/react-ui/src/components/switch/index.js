import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './switch.styles'

const Switch = props => {
  return (
    <Element
      as="label"
      baseStyles={styles.SwitchContainer}
      component="SwitchContainer"
    >
      <Element
        as="input"
        type="checkbox"
        baseStyles={styles.SwitchInput}
        component="SwitchInput"
        checked={props.value}
        defaultChecked={props.defaultValue}
        {...props}
      />
      <Element
        as="span"
        baseStyles={styles.SwitchBackground}
        component="SwitchBackground"
      >
        <Element
          as="span"
          baseStyles={styles.SwitchToggle}
          component="SwitchToggle"
        />
      </Element>
    </Element>
  )
}

Switch.propTypes = {
  value: PropTypes.bool,
  defaultValue: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

Switch.defaultProps = {}

export { Switch }
