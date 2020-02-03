import React from 'react'
import { Element } from '@ds-tools/primitives'
import * as ReachMenu from '@reach/menu-button'
import '@reach/menu-button/styles.css'
import { styles } from './menu.styles'
import { Button } from '../Button'

const Menu = ({ ...props }) => {
  return (
    <Element as={ReachMenu.Menu} {...props}>
      {props.children}
    </Element>
  )
}

const MenuButton = props => {
  return <Button variant="secondary" as={ReachMenu.MenuButton} {...props} />
}

const MenuList = props => {
  return (
    <Element
      as={ReachMenu.MenuList}
      component="MenuList"
      baseStyles={styles.MenuList}
      {...props}
    >
      {props.children}
    </Element>
  )
}

const MenuItem = props => {
  return (
    <Element
      as={ReachMenu.MenuItem}
      component="MenuItem"
      baseStyles={styles.MenuItem}
      {...props}
    />
  )
}

Menu.Button = MenuButton
Menu.List = MenuList
Menu.Item = MenuItem

export { Menu }
