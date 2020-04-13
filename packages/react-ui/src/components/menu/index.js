import React from 'react'
import { Element } from '../../primitives'
import * as ReachMenu from '@reach/menu-button'
import { styles } from './menu.styles'
import { Button } from '../button'
import { merge } from '../../utils'

const Menu = React.forwardRef(function Menu(props, ref) {
  return <Element ref={ref} as={ReachMenu.Menu} {...props} />
})

const MenuButton = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      variant="secondary"
      as={ReachMenu.MenuButton}
      {...props}
    />
  )
})

MenuButton.displayName = 'Menu.Button'

const MenuList = React.forwardRef(({ css, ...props }, ref) => {
  return (
    <Element
      ref={ref}
      as={ReachMenu.MenuList}
      component="MenuList"
      css={merge(styles.MenuList, css)}
      {...props}
    />
  )
})

MenuList.displayName = 'Menu.List'

const MenuItem = React.forwardRef(({ css, ...props }, ref) => {
  return (
    <Element
      ref={ref}
      as={ReachMenu.MenuItem}
      component="MenuItem"
      css={merge(styles.MenuItem, css)}
      {...props}
    />
  )
})

MenuItem.displayName = 'Menu.Item'

Menu.Button = MenuButton
Menu.List = MenuList
Menu.Item = MenuItem

export { Menu }
