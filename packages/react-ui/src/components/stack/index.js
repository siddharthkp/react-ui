import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../primitives'
import { merge } from '../../utils'

// TODO: prefixed version can be removed after upgrading to Emotion 11
const createGap = (direction, gap) => {
  if (direction === 'vertical') {
    return {
      marginTop: gap,
      marginInlineStart: 0
    }
  }

  return {
    marginTop: 0,
    marginInlineStart: gap
  }
}

const Stack = React.forwardRef(function Stack(
  { inline, justify, align, direction, gap, css, ...props },
  ref
) {
  const styles = {
    display: inline ? 'inline-flex' : 'flex',
    // width: '100%', // causes weirdness in nested avatar. todo: debug
    justifyContent: justify,
    alignItems: align
  }

  if (Array.isArray(direction)) {
    styles.flexDirection = direction.map(d =>
      d === 'vertical' ? 'column' : 'row'
    )
    styles['> * + *'] = direction.map(d => createGap(d, gap))
  } else {
    styles.flexDirection = direction === 'vertical' ? 'column' : 'row'
    styles['> * + *'] = createGap(direction, gap)
  }

  let children = props.children
  if (gap) {
    children = React.Children.map(props.children, (child, index) => (
      <Element key={index} as={inline ? 'span' : 'div'} component="StackItem">
        {child}
      </Element>
    ))
  }

  return (
    <Element
      ref={ref}
      as="div"
      component="Stack"
      css={merge(styles, css)}
      {...props}
    >
      {children}
    </Element>
  )
})

Stack.propTypes = {
  /** Description of the gap prop */
  gap: PropTypes.oneOfType([
    // from scale
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
    // or a value with unit
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  // direction: PropTypes.oneOf(['horizontal', 'vertical']),
  justify: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  align: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  inline: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.bool)
  ])
}

Stack.defaultProps = {
  direction: 'horizontal',
  inline: false
}

export { Stack }
