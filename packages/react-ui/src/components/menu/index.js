import React from 'react'
import { Element } from '@ds-tools/primitives'
import * as ReachMenu from '@reach/menu-button'
import '@reach/menu-button/styles.css'
import { styles } from './menu.styles'

const Menu = ({ ...props }) => {
  return (
    <Element as={ReachMenu.Menu} {...props}>
      {props.children}
    </Element>
  )
}

const MenuButton = props => {
  return (
    <Element
      as={ReachMenu.MenuButton}
      baseStyles={styles.MenuButton}
      {...props}
    />
  )
}

const MenuList = props => {
  return (
    <Element as={ReachMenu.MenuList} baseStyles={styles.MenuList} {...props}>
      {props.children}
    </Element>
  )
}

Menu.Button = MenuButton
Menu.List = MenuList
Menu.Item = ReachMenu.MenuItem

export { Menu }
