import React from 'react'
import { Link } from 'react-ui'
import { SectionHeading } from './typography'

export const Section = ({ id, title, badge, ...props }) => {
  return (
    <section id={id || title}>
      {title ? (
        <Link
          href={'#' + (id || title)}
          css={{
            ':hover, :focus': {
              ':before': {
                content: '"#"',
                fontSize: 5,
                display: 'inline-block',
                width: '16px',
                marginLeft: '-24px',
                marginRight: '8px',
                color: 'text.subtle'
              }
            }
          }}
          {...props}
        >
          <SectionHeading css={{ display: 'inline-block' }}>
            {title}
          </SectionHeading>
        </Link>
      ) : null}
      {props.children}
    </section>
  )
}
