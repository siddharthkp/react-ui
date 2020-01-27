import React from 'react'
import { Grid, Row, Column, merge } from 'react-ui'

export const Table = ({ css = {}, ...props }) => (
  <Grid marginBottom={6} css={merge({ fontSize: 3 }, css)} {...props} />
)

Table.Row = ({ css, ...props }) => (
  <Row
    gap="auto"
    css={merge(
      {
        color: 'text.body',
        padding: 2,
        borderBottom: '1px solid',
        borderColor: 'grays.100'
      },
      css
    )}
    {...props}
  />
)

Table.Header = ({ css = {}, ...props }) => (
  <Table.Row css={merge({ color: 'text.subtle' }, css)} {...props} />
)

Table.Column = Column
