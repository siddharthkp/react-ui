import React from 'react'
import { Radio } from 'react-ui'
import { Table, Page, Section, Props, Badge, Example } from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Radio"
      tagline="A radio component."
      badges={[<Badge key={0}>accessible</Badge>]}
    >
      <Example>
        <Example.Preview>
          <Radio label="Normal" value="Normal" />
        </Example.Preview>
        <Example.Code>
          {`
              <Radio label="Normal" value="Normal" />
            `}
        </Example.Code>
        <Example.Preview>
          <Radio label="Disabled" value="Disabled" disabled />
        </Example.Preview>
        <Example.Code>
          {`
              <Radio label="Disabled" value="Disabled" disabled />
            `}
        </Example.Code>
        <Example.Preview>
          <Radio label="Default Checked" value="Default" checked />
        </Example.Preview>
        <Example.Code>
          {`
              <Radio label="Default Checked" value="Default" checked />
            `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'label',
              type: 'Text',
              description: 'label to be displayed',
              default: '<empty>'
            },
            {
              name: 'value',
              type: 'Text',
              description: 'value associated to the radio button',
              default: '<empty>'
            },
            {
              name: 'disabled',
              type: 'Boolean',
              description: 'Radio button disabled: true or false',
              default: '<empty>'
            },
            {
              name: 'checked',
              type: 'Boolean',
              description: 'Default behaviour checked or not',
              default: '<empty>'
            }
          ]}
        />
      </Section>
    </Page>
  )
}

export default Documentation
