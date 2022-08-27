import React from 'react'
import { Checkbox } from 'react-ui'
import { Table, Page, Section, Props, Badge, Example } from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Checkbox"
      tagline="A checkbox component."
      badges={[<Badge key={0}>accessible</Badge>]}
    >
      <Example>
        <Example.Preview>
          <Checkbox label="Normal" />
        </Example.Preview>
        <Example.Code>
          {`
              <Checkbox label="Normal" />
            `}
        </Example.Code>
      </Example>

      <Section title="Props: Normal">
        <Props
          props={[
            {
              name: 'label',
              type: 'Text',
              description: 'label to be displayed',
              default: '<empty>'
            }
          ]}
        />
      </Section>

      <Example>
        <Example.Preview>
          <Checkbox label="Disabled" disabled />
        </Example.Preview>
        <Example.Code>
          {`
              <Checkbox label="Disabled" disabled />
            `}
        </Example.Code>
      </Example>

      <Section title="Props: Disabled">
        <Props
          props={[
            {
              name: 'label',
              type: 'Text',
              description: 'label to be displayed',
              default: '<empty>'
            },
            {
              name: 'disabled',
              type: 'Boolean',
              description: 'checkbox button disabled: true or false',
              default: '<empty>'
            }
          ]}
        />
      </Section>

      <Example>
        <Example.Preview>
          <Checkbox label="Default checked" checked />
        </Example.Preview>
        <Example.Code>
          {`
              <Checkbox label="Default checked" checked />
            `}
        </Example.Code>
      </Example>

      <Section title="Props: Default Checked">
        <Props
          props={[
            {
              name: 'label',
              type: 'Text',
              description: 'label to be displayed',
              default: '<empty>'
            },
            {
              name: 'checked',
              type: 'Boolean',
              description: 'Default Behaviour Checked',
              default: '<empty>'
            }
          ]}
        />
      </Section>
    </Page>
  )
}

export default Documentation
