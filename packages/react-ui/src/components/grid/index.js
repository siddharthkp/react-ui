import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './grid.styles'

function Grid({ gap, columnGap, rowGap, ...props }) {
  let gaps = {}

  if (gap === 'auto') {
    // picks up row and column gap based on body fontsize
    const fontSize = 1 // rem = 16px
    const lineHeight = fontSize * 1.5
    gaps = {
      gridColumnGap: lineHeight * 2 + 'rem',
      gridRowGap: lineHeight + 'rem'
    }
  } else gaps = { columnGap, rowGap }

  return (
    <Element
      as="div"
      component="Grid"
      baseStyles={{
        ...styles.Grid,
        ...gaps
      }}
      {...props}
    />
  )
}

function Column({ start, end, span, ...props }) {
  let column = {}

  if (Array.isArray(start)) column.gridColumnStart = start.map(s => s)
  else if (start) column.gridColumnStart = start

  if (Array.isArray(end)) column.gridColumnEnd = end.map(s => s + 1)
  else if (end) column.gridColumnEnd = end + 1

  if (Array.isArray(span)) column.gridColumnEnd = span.map(s => 'span  ' + s)
  else if (span) column.gridColumnEnd = 'span ' + span

  return (
    <Element as="div" component="GridColumn" baseStyles={column} {...props} />
  )
}

function Row(props) {
  return (
    <Element
      as={Grid}
      component="GridRow"
      baseStyles={styles.GridRow}
      {...props}
    />
  )
}

Grid.propTypes = {
  gap: PropTypes.oneOf(['auto', 'none']),
  columnGap: PropTypes.number,
  rowGap: PropTypes.number
}

Grid.defaultProps = {
  gap: 'none',
  columnGap: 0,
  rowGap: 0
}

export { Grid, Column, Row }
