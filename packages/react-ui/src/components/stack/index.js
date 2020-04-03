import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../primitives'
import { merge } from '../../utils'

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
    styles['> *:not(:last-child)'] = direction.map(d => ({
      [d === 'vertical' ? 'marginBottom' : 'marginRight']: gap,
      [d === 'vertical' ? 'marginRight' : 'marginBottom']: 0
    }))
  } else {
    styles.flexDirection = direction === 'vertical' ? 'column' : 'row'
    styles['> *:not(:last-child)'] = {
      [direction === 'vertical' ? 'marginBottom' : 'marginRight']: gap
    }
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
