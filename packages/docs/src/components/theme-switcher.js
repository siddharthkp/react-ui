import React from 'react'
import { Menu } from 'react-ui'
import * as base from 'react-ui/themes/base'
import * as light from 'react-ui/themes/light'
import * as dark from 'react-ui/themes/dark'

const themes = { base, light, dark }

const ThemeSwitcher = ({ setThemeName }) => {
  return (
    <Menu>
      <Menu.Button>Change theme</Menu.Button>
      <Menu.List>
        <Menu.Item onSelect={_ => setThemeName('base')}>Base</Menu.Item>
        <Menu.Item onSelect={_ => setThemeName('light')}>Light</Menu.Item>
        <Menu.Item onSelect={_ => setThemeName('dark')}>Dark</Menu.Item>
      </Menu.List>
    </Menu>
  )
}

const useThemeSwitcher = () => {
  const [name, setName] = React.useState(localStorage.theme || 'base')

  const setThemeName = name => {
    setName(name)
    localStorage.theme = name
  }

  const theme = themes[name]

  return {
    tokens: theme.theme,
    components: theme.components,
    setThemeName,
    ThemeSwitcher
  }
}

export { useThemeSwitcher }
