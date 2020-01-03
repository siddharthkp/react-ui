import React from 'react'
import { Element, Stack, Link } from 'react-ui'

export const Sidebar = props => (
  <Element
    as="aside"
    baseStyles={{
      top: 0,
      height: ['auto', '100vh'],
      background: 'white',
      borderRight: '1px solid',
      borderColor: 'grays.200',
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
      justify="space-between"
      css={{
        display: ['none', 'flex'],
        width: '100%',
        paddingY: 2,
        paddingX: 4,
        cursor: 'pointer',
        borderRight: '2px solid',
        borderColor: props.selected ? 'blues.400' : 'transparent',
        ':hover': {
          backgroundColor: 'grays.200'
        },
        ':focus': {
          outline: 'none',
          backgroundColor: 'grays.200'
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
  lineHeight: 1,
  fontWeight: 600,
  paddingX: 1,
  minWidth: '16px',
  paddingY: '2px',
  borderRadius: '20px'
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
