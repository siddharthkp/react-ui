import React from 'react'
import { Badge } from 'react-ui'
import {
  Page,
  Section,
  Props,
  Example,
} from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Badge"
      tagline="A badge is way to display numerical counter"
    >
      <Example>
        <Example.Preview align="center">
          <Badge>99</Badge>
        </Example.Preview>
        <Example.Code>
          {`
              <Badge>99</Badge>
            `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'variant',
              type: 'enum',
              description: 'defined in theme',
              default: 'primary'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example title="Variants">

          <Example.Preview gap={4}>
            <Badge>12</Badge>
            <Badge variant="secondary">
              0
            </Badge>
            <Badge variant="destructive">45</Badge>
          </Example.Preview>
          <Example.Code>{`
            <Badge>12</Badge>
            <Badge variant="secondary">0</Badge>
            <Badge variant="destructive">45</Badge>
          `}</Example.Code>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
