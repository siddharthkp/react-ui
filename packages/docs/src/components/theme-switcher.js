import React from 'react'
import { Menu, Element } from 'react-ui'
import * as base from 'react-ui/themes/base'
import * as light from 'react-ui/themes/light'
import * as dark from 'react-ui/themes/dark'

const themes = { base, light, dark }

const caret = (
  <svg
    fill="none"
    height="24"
    viewBox="0 0 10 24"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor">
      <path d="m5.00006 17-3.00006-4h6z" />
      <path d="m4.99994 7 3.00006 4h-6z" />
    </g>
  </svg>
)

const ThemeSwitcher = ({ name, setThemeName }) => {
  return (
    <Menu>
      <Menu.Button
        css={{
          textTransform: 'capitalize'
        }}
      >
        <Element as="span" marginRight={1}>
          Theme: {name}
        </Element>{' '}
        {caret}
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
    tokens: theme.theme,
    components: theme.components,
    name,
    setThemeName,
    ThemeSwitcher
  }
}

export { useThemeSwitcher }
