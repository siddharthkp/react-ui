import React from 'react'
import { Checkbox } from 'react-ui'
import { Page, Section, Props, Badge, Example } from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Checkbox"
      tagline="A checkbox component."
      badges={[<Badge key={0}>accessible</Badge>]}
    >
      <Example>
        <Example.Preview>
          <Checkbox label="Accept" />
        </Example.Preview>
        <Example.Code>
          {`
              <Checkbox />
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
            }
          ]}
        />
      </Section>
    </Page>
  )
}

export default Documentation
