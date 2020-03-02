import React from 'react'
import { Menu, Text } from 'react-ui'
import * as base from 'react-ui/themes/base'
import * as light from 'react-ui/themes/light'
import * as dark from 'react-ui/themes/dark'

const themes = { base, light, dark }

const ThemeSwitcher = ({ name, setThemeName }) => {
  return (
    <Menu>
      <Menu.Button style={{ paddingRight: 1 }}>
        <Text marginRight={1} css={{ textTransform: 'capitalize' }}>
          Theme: {name}
        </Text>
        {chevron}
      </Menu.Button>
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
    name,
    tokens: theme.theme,
    components: theme.components,
    setThemeName,
    ThemeSwitcher
  }
}

export { useThemeSwitcher }

const chevron = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
)
