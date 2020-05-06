import React from 'react'
import { Link, Paragraph, Text, Stack, Button } from 'react-ui'
import { Page, Section, Para, Example } from '../../components'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel
} from '@reach/accordion'
import '@reach/accordion/styles.css'

const Documentation = () => {
  return (
    <Page title="Integrating with Reach UI">
      <Para>
        <Text>
          <Link href="https://reacttraining.com/reach-ui/">Reach UI</Link> and
          React UI work great together.
        </Text>
        <Text>
          Several components in React UI already use Reach UI as their base.
          Example: <Link href="/components/Menu">Menu</Link>,{' '}
          <Link href="/components/Dialog">Dialog</Link> and{' '}
          <Link href="/components/Tooltip">Tooltip</Link>.
        </Text>
      </Para>

      <Section title="Creating new components">
        <Para>
          <Text>
            You can create new components using a Reach UI component as it's
            base and connect it to tokens based styles via React UI.
          </Text>
          <Text>
            Here's an{' '}
            <Link href="https://reacttraining.com/reach-ui/accordion">
              accordion
            </Link>{' '}
            component for example:
          </Text>
        </Para>
        <Stack direction="vertical" gap={3}>
          <Example>
            <Example.Preview>
              <Accordion>
                <AccordionItem>
                  <h3>
                    <Button as={AccordionButton} type="button" variant="link">
                      Section 1
                    </Button>
                  </h3>

                  <AccordionPanel>
                    <Paragraph marginX={3}>
                      <Text>
                        Here are some detailed instructions about doing a thing.
                        I am very complex and probably contain a lot of content,
                        so a user can hide or show me by clicking the button
                        above.
                      </Text>
                    </Paragraph>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h3>
                    <Button as={AccordionButton} type="button" variant="link">
                      Section 2
                    </Button>
                  </h3>

                  <AccordionPanel>
                    <Paragraph marginX={3}>
                      <Text>
                        Here are some detailed instructions about doing yet
                        another thing. There are a lot of things someone might
                        want to do, so I am only going to talk about doing that
                        other thing. I'll let my fellow accordion items go into
                        detail about even more things.
                      </Text>
                    </Paragraph>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Example.Preview>
            <Example.Code lang="js">{`
              import {
                Accordion,
                AccordionItem,
                AccordionButton,
                AccordionPanel
              } from '@reach/accordion'
              import '@reach/accordion/styles.css'
              import { Button, Paragraph, Text } from 'react-ui'

              
            `}</Example.Code>
            <Example.Code>
              {`
            render(
              <Accordion>
                <AccordionItem>
                  <h3>
                    <Button as={AccordionButton} type="button" variant="link">
                      Section 1
                    </Button>
                  </h3>

                  <AccordionPanel>
                    <Paragraph marginX={3}>
                      <Text>
                        Here are some detailed instructions about doing a thing.
                        I am very complex and probably contain a lot of content,
                        so a user can hide or show me by clicking the button
                        above.
                      </Text>
                    </Paragraph>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h3>
                    <Button as={AccordionButton} type="button" variant="link">
                      Section 2
                    </Button>
                  </h3>

                  <AccordionPanel>
                    <Paragraph marginX={3}>
                      <Text>
                        Here are some detailed instructions about doing yet
                        another thing. There are a lot of things someone might
                        want to do, so I am only going to talk about doing that
                        other thing. I'll let my fellow accordion items go into
                        detail about even more things.
                      </Text>
                    </Paragraph>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            )
          `}
            </Example.Code>
          </Example>
        </Stack>
      </Section>
    </Page>
  )
}

export default Documentation
