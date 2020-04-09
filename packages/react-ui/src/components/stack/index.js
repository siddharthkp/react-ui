import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../primitives'
import { merge } from '../../utils'

// TODO: prefixed version can be removed after upgrading to Emotion 11
const createGap = (direction, gap) => {
  if (direction === 'vertical') {
    return {
      marginBottom: gap,
      '-webkitMarginEnd': 0,
      marginInlineEnd: 0
    }
  }

  return {
    marginBottom: 0,
    '-webkitMarginEnd': gap,
    marginInlineEnd: gap
  }
}

const Stack = ({ inline, justify, align, direction, gap, css, ...props }) => {
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
    styles['> *:not(:last-child)'] = direction.map(d => createGap(d, gap))
  } else {
    styles.flexDirection = direction === 'vertical' ? 'column' : 'row'
    styles['> *:not(:last-child)'] = createGap(direction, gap)
  }

  return (
    <Element as="div" component="Stack" css={merge(styles, css)} {...props}>
      {props.children}
    </Element>
  )
}

const responsive = value => {
  return { key: value }
}

Stack.propTypes = {
  /** Description of the gap prop */
  gap: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
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
