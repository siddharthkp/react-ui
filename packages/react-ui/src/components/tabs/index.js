import React from 'react'
import * as Reach from '@reach/tabs'
import { Element } from '../../primitives'
import { merge } from '../../utils'
import { styles } from './tabs.styles'

const Tabs = React.forwardRef(({ css, ...props }, ref) => {
  const tabs = []

  const children = React.Children.map(props.children, child => {
    tabs.push({ label: child.props.label, disabled: child.props.disabled })
    return child
  })

  return (
    <Element
      as={Reach.Tabs}
      component="Tabs"
      {...props}
      css={merge(styles.Tabs, css)}
      ref={ref}
    >
      <Element as={Reach.TabList} component="TabList" css={styles.TabList}>
        {tabs.map(({ label, disabled }, index) => (
          <Element
            as={Reach.Tab}
            component="Tab"
            key={index}
            variant="link"
            component="Tab"
            disabled={disabled}
            css={styles.Tab}
          >
            {label}
          </Element>
        ))}
      </Element>
      <Element as={Reach.TabPanels} component="TabPanels">
        {children}
      </Element>
    </Element>
  )
})

const Tab = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <Element as={Reach.TabPanel} component="TabPanel" ref={ref} {...props} />
  )
})

Tabs.Tab = Tab

Tabs.displayName = 'Tabs'
Tabs.Tab.displayName = 'Tab'

export { Tabs }
