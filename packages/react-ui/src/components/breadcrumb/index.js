import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../primitives'
import { styles } from './breadcrumb.styles'
import { merge } from '../../utils'

const Separator = props => (
  <Element
    as="span"
    aria-hidden="true"
    component="BreadcrumbSeparator"
    css={styles.BreadcrumbSeparator}
  >
    {props.separator}
  </Element>
)

export const Breadcrumb = React.forwardRef(function Breadcrumb(
  { separator, css, ...props },
  ref
) {
  const children = React.Children.map(props.children, function(child, index) {
    const isLast = index === props.children.length - 1

    return (
      <Element
        ref={ref}
        as="li"
        component="BreadcrumbItem"
        css={styles.BreadcrumbItem}
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
      css={merge(styles.Breadcrumb, css)}
      {...props}
    >
      <ol>{children}</ol>
    </Element>
  )
})

Breadcrumb.propTypes = {
  separator: PropTypes.node
}

Breadcrumb.defaultProps = {
  separator: '/'
}
