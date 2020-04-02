import React from 'react'
import { Element } from '@ds-tools/primitives'
import * as ReachMenu from '@reach/menu-button'
import { styles } from './menu.styles'
import { Button } from '../button'
import { merge } from '../../../utils'

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

const MenuList = ({ css, ...props }) => {
  return (
    <Element
      as={ReachMenu.MenuList}
      component="MenuList"
      css={merge(styles.MenuList, css)}
      {...props}
    >
      {props.children}
    </Element>
  )
}

const MenuItem = ({ css, ...props }) => {
  return (
    <Element
      as={ReachMenu.MenuItem}
      component="MenuItem"
      css={merge(styles.MenuItem, css)}
      {...props}
    />
  )
}

Menu.Button = MenuButton
Menu.List = MenuList
Menu.Item = MenuItem

export { Menu }
