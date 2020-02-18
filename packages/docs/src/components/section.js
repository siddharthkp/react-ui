import React from 'react'
import { Link } from 'react-ui'
import { SectionHeading } from './typography'

export const Section = ({ id, title, ...props }) => {
  return (
    <section id={id || title}>
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
      >
        <SectionHeading css={{ display: 'inline-block' }}>
          {title}
        </SectionHeading>
      </Link>
      {props.children}
    </section>
  )
}
