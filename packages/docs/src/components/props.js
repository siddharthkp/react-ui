import React from 'react'
import { Table } from './table'

export const Props = ({ props, ...restprops }) => {
  return (
    <Table {...restprops}>
      <Table.Header>
        <Table.Column span={3}>Name</Table.Column>
        <Table.Column span={7}>Type</Table.Column>
        <Table.Column span={2}>Default</Table.Column>
      </Table.Header>
      {props.map(prop => (
        <Table.Row key={prop.name}>
          <Table.Column span={3}>
            {prop.name} {prop.required && '*'}
          </Table.Column>
          <Table.Column span={7}>
            {prop.type}
            {prop.options && ': [' + prop.options.join(', ') + ']'}
          </Table.Column>
          <Table.Column span={2}>{prop.default}</Table.Column>
        </Table.Row>
      ))}
    </Table>
  )
}
