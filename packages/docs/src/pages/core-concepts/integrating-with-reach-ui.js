import React from 'react'
import { ThemeProvider, Element, Link, Paragraph, Text, merge } from 'react-ui'
import { Stack, Button, Heading } from 'react-ui'
import { Page, Example, Section, Props, Table, Para } from '../../components'
import * as light from 'react-ui/themes/light'

import { List, Code } from '../../components'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel
} from '@reach/accordion'
import '@reach/accordion/styles.css'

import { Dialog } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import '@reach/dialog/styles.css'

function ExampleDialog() {
  const [showDialog, setShowDialog] = React.useState(false)

  function open() {
    setShowDialog(true)
  }

  function close() {
    setShowDialog(false)
  }

  return (
    <div>
      <Button type="button" onClick={open}>
        Open Dialog
      </Button>
      <Dialog
        isOpen={showDialog}
        onDismiss={close}
        style={{ padding: '0.5rem' }}
      >
        <Stack direction="vertical" gap={2}>
          <Stack justify="space-between" align="center">
            <Heading size="4">Modal dialog title</Heading>
            <Button type="button" variant="secondary" onClick={close}>
              <VisuallyHidden>Close</VisuallyHidden>
              <span aria-hidden>×</span>
            </Button>
          </Stack>
          <Paragraph>
            <Text>Hello there. I am a dialog.</Text>
            <Text>Hello there. I am a dialog.</Text>
            <Text>Hello there. I am a dialog.</Text>
          </Paragraph>

          <Stack justify="flex-end" gap={2}>
            <Button type="button" variant="secondary" onClick={close}>
              Cancel
            </Button>
            <Button type="button" onClick={close}>
              Okay
            </Button>
          </Stack>
        </Stack>
      </Dialog>
    </div>
  )
}

const Documentation = () => {
  return (
    <Page
      title="Integrating with Reach UI"
      tagline="Reach UI seeks to become the accessible foundation of your React-based design system."
    >
      <Paragraph>
        <Text>
          <Link href="https://reacttraining.com/reach-ui/">
            https://reacttraining.com/reach-ui/
          </Link>
        </Text>
        <Text>Reach UI and React UI work great together.</Text>
      </Paragraph>
      On this page:
      <List>
        <Link href="#accordian">1. Accordian</Link>
        <Link href="#dialog">2. Dialog (Modal)</Link>
      </List>
      <Section id="accordian" title="@reach/accordian">
        <Stack direction="vertical" gap={3}>
          <Link href="https://reacttraining.com/reach-ui/accordion">
            https://reacttraining.com/reach-ui/accordion
          </Link>
          <Example>
            <Example.Preview>
              <Accordion>
                <AccordionItem>
                  <h3>
                    <AccordionButton
                      as={Button}
                      type="button"
                      variant="secondary"
                    >
                      Step 1: Do a thing
                    </AccordionButton>
                  </h3>
                  <AccordionPanel>
                    <Text>
                      Here are some detailed instructions about doing a thing. I
                      am very complex and probably contain a lot of content, so
                      a user can hide or show me by clicking the button above.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h3>
                    <AccordionButton
                      as={Button}
                      type="button"
                      variant="secondary"
                    >
                      Step 2: Do another thing
                    </AccordionButton>
                  </h3>
                  <AccordionPanel>
                    <Text>
                      Here are some detailed instructions about doing yet
                      another thing. There are a lot of things someone might
                      want to do, so I am only going to talk about doing that
                      other thing. I'll let my fellow accordion items go into
                      detail about even more things.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Example.Preview>
            <Example.Code>
              {`
            <Accordion>
              <AccordionItem>
                <h3>
                  <AccordionButton as={Button} type="button" variant="secondary">
                    Step 1: Do a thing
                  </AccordionButton>
                </h3>
                <AccordionPanel>
                  <Text>
                    Here are some detailed instructions about doing a thing. I am very
                    complex and probably contain a lot of content, so a user can hide
                    or show me by clicking the button above.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h3>
                  <AccordionButton as={Button} type="button" variant="secondary">
                    Step 2: Do another thing
                  </AccordionButton>
                </h3>
                <AccordionPanel>
                  <Text>
                    Here are some detailed instructions about doing yet another thing.
                    There are a lot of things someone might want to do, so I am only
                    going to talk about doing that other thing. I'll let my fellow
                    accordion items go into detail about even more things.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          `}
            </Example.Code>
          </Example>
        </Stack>
      </Section>
      <Section id="dialog" title="@reach/dialog (Modal)">
        <Stack direction="vertical" gap={3}>
          <Link href="https://reacttraining.com/reach-ui/dialog">
            https://reacttraining.com/reach-ui/dialog
          </Link>
          <Example>
            <Example.Preview>
              <ExampleDialog />
            </Example.Preview>
            <Example.Code>
              {`
          function ExampleDialog() {
            const [showDialog, setShowDialog] = React.useState(false)

            function open() {
              setShowDialog(true)
            }

            function close() {
              setShowDialog(false)
            }

            return (
              <div>
                <Button type="button" onClick={open}>
                  Open Dialog
                </Button>
                <Dialog
                  isOpen={showDialog}
                  onDismiss={close}
                  style={{ padding: '0.5rem' }}
                >
                  <Stack direction="vertical" gap={2}>
                    <Stack justify="space-between" align="center">
                      <Heading size="4">Modal dialog title</Heading>
                      <Button type="button" variant="secondary" onClick={close}>
                        <VisuallyHidden>Close</VisuallyHidden>
                        <span aria-hidden>×</span>
                      </Button>
                    </Stack>
                    <Paragraph>
                      <Text>Hello there. I am a dialog.</Text>
                      <Text>Hello there. I am a dialog.</Text>
                      <Text>Hello there. I am a dialog.</Text>
                    </Paragraph>

                    <Stack justify="flex-end" gap={2}>
                      <Button type="button" variant="secondary" onClick={close}>
                        Cancel
                      </Button>
                      <Button type="button" onClick={close}>
                        Okay
                      </Button>
                    </Stack>
                  </Stack>
                </Dialog>
              </div>
            )
          }
          `}
            </Example.Code>
          </Example>
        </Stack>
      </Section>
    </Page>
  )
}

export default Documentation
