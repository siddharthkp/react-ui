import React from 'react'
import { Link } from 'react-ui'
import { SectionHeading } from './typography'

export const Section = ({ title, ...props }) => {
  return (
    <section id={title}>
      <Link href={'#' + title}>
        <SectionHeading>{title}</SectionHeading>
      </Link>
      {props.children}
    </section>
  )
}
