import React from 'react'
import { Element, Stack, Link } from 'react-ui'

export const Sidebar = props => (
  <Element
    as="aside"
    component="Sidebar"
    css={{
      top: 0,
      height: ['auto', '100vh'],
      backgroundColor: 'Sidebar.background',
      borderRight: '1px solid',
      borderColor: 'Sidebar.border',
      paddingY: [5, 10],
      fontSize: 3,
      ul: {
        paddingLeft: 0,
        listStyle: 'none',
        marginY: 0
      }
    }}
    {...props}
  >
    <ul>{props.children}</ul>
  </Element>
)

Sidebar.Item = props => (
  <Element as="li">
    <Stack
      as={Link}
      href="#"
      justify="space-between"
      css={{
        display: ['inline', 'flex'],
        width: '100%',
        paddingY: 2,
        paddingX: 4,
        cursor: 'pointer',
        borderRight: '2px solid',
        borderColor: props.selected ? 'blues.400' : 'transparent',
        ':hover': {
          backgroundColor: 'Sidebar.backgroundHover'
        },
        ':focus': {
          outline: 'none',
          backgroundColor: 'Sidebar.backgroundFocus'
        }
      }}
      {...props}
    />
  </Element>
)

const badgeStyles = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 1,
  lineHeight: 0,
  fontWeight: 600,
  paddingX: 1,
  minWidth: 4,
  paddingY: '2px',
  borderRadius: '25px'
}

export const Badge = ({ variant = 'default', ...props }) => (
  <Element
    as="span"
    baseStyles={{
      ...badgeStyles,
      variant: `badges.${variant}`
    }}
    {...props}
  >
    {props.children}
  </Element>
)
