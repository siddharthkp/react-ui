import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './breadcrumb.styles'

const Separator = props => (
  <Element
    as="span"
    aria-hidden="true"
    component="BreadcrumbSeparator"
    baseStyles={styles.BreadcrumbSeparator}
  >
    {props.separator}
  </Element>
)

export const Breadcrumb = ({ separator, ...props }) => {
  const children = React.Children.map(props.children, function(child, index) {
    const isLast = index === props.children.length - 1

    return (
      <Element
        as="li"
        component="BreadcrumbItem"
        baseStyles={styles.BreadcrumbItem}
        aria-current={isLast ? 'page' : null}
      >
        {child}
        {isLast ? null : <Separator separator={separator} />}
      </Element>
    )
  })

  return (
    <Element
      as="nav"
      aria-label="breadcrumb"
      component="Breadcrumb"
      baseStyles={styles.Breadcrumb}
      {...props}
    >
      <ol>{children}</ol>
    </Element>
  )
}

Breadcrumb.propTypes = {
  separator: PropTypes.node
}

Breadcrumb.defaultProps = {
  separator: '/'
}
