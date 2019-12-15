import React from 'react'
import { Element, Link } from 'react-ui'

/** not the best example because of a bad API
 * see https://github.com/reach/reach-ui/pull/256
 * for better API
 */

export const Breadcrumbs = props => (
  <Element
    as="ul"
    aria-label="breadcrumb"
    css={{
      width: 400,
      margin: 'auto',
      fontSize: 3,
      paddingLeft: 0,
      Link: {
        '&:after': {
          content: "'/'",
          color: 'grays.700',
          paddingX: 2
        }
      }
    }}
    {...props}
  />
)

Breadcrumbs.Link = props => {
  if (props.href) {
    return (
      <Element as="li" css={{ display: 'inline-block' }}>
        <Link
          css={{
            color: 'grays.700',
            '&:after': {
              content: "'/'",
              color: 'grays.700',
              paddingX: 2
            }
          }}
          {...props}
        />
      </Element>
    )
  } else {
    return (
      <Element as="li" aria-current css={{ display: 'inline-block' }}>
        {props.children}
      </Element>
    )
  }
}
