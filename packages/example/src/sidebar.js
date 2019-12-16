import React from 'react'
import { Element, Link } from 'react-ui'

export const Sidebar = props => (
  <Element
    as="aside"
    baseStyles={{
      top: 0,
      height: '100vh',
      background: 'white',
      borderRight: '1px solid',
      borderColor: 'grays.200',
      paddingTop: 10,
      ul: {
        paddingLeft: 0,
        listStyle: 'none'
      }
    }}
    {...props}
  >
    <ul>{props.children}</ul>
  </Element>
)

Sidebar.Item = props => (
  <li>
    <Link
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        paddingY: 2,
        paddingX: 4,
        fontSize: 3,
        ':hover': {
          backgroundColor: 'grays.200'
        }
      }}
      {...props}
    />
  </li>
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
