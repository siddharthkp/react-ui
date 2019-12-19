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
        checked={props.on}
        defaultChecked={props.defaultOn}
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
  disabled: PropTypes.bool,
  on: PropTypes.bool,
  defaultOn: PropTypes.bool,
  onChange: PropTypes.func
}

Switch.defaultProps = {}

export { Switch }
