import React from 'react'
import * as base from 'react-ui/themes/base'
import { ThemeProvider, Link, Text, Dialog, Button } from 'react-ui'
import {
  Table,
  Page,
  Section,
  Props,
  Badge,
  Example,
  Para
} from '../../components'

const DialogPresenter = ({ children }) => {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <>
      <Button onClick={open}>Open Dialog</Button>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <div>
          <div>{children}</div>
          <Button variant="destructive" onClick={close}>
            Close Dialog
          </Button>
        </div>
      </Dialog>
    </>
  )
}

const Documentation = () => {
  return (
    <Page
      title="Dialog"
      tagline="Use dialog for showing or asking additional information"
      badges={[<Badge key={0}>accessible</Badge>]}
    >
      <Para>
        Extends{' '}
        <Link href="https://reacttraining.com/reach-ui/dialog" target="_blank">
          reach-ui/dialog
        </Link>
        .
      </Para>
      <Section title="Dialog">
        <Para>
          Simple Dialog component to show custom elements. To show and hide the
          dialog component, you have to control it by yourself, e.g. with a
          custom state. Read{' '}
          <Link
            href="https://reacttraining.com/reach-ui/dialog/#dialog"
            target="_blank"
          >
            here
          </Link>{' '}
          for further information
        </Para>
        <Example>
          <Example.Preview>
            <DialogPresenter>
              <p>The content of the Dialog</p>
            </DialogPresenter>
          </Example.Preview>
          <Example.Code lang="js">{`
          const [showDialog, setShowDialog] = React.useState(false);
          const open = () => setShowDialog(true);
          const close = () => setShowDialog(false);
          
        `}</Example.Code>
          <Example.Code lang="jsx">
            {`
              <>
                <Button onClick={open}>Open Dialog</Button>
                <Dialog isOpen={showDialog} onDismiss={close}>
                  <p>The content of the Dialog</p>
                  <button onClick={close}>
                    Close Dialog
                  </button>
                </Dialog>              
              </>
          `}
          </Example.Code>
        </Example>
      </Section>
      <Section title="Props: Dialog">
        <Props
          props={[
            {
              name: 'children',
              type: '[ React elements ]',
              description: '',
              required: true
            },
            {
              name: 'isOpen',
              type: 'boolean',
              description: '',
              required: true,
              default: 'false'
            },
            {
              name: 'onDismiss',
              type: 'function',
              description: 'function to call when dialog should close'
            }
          ]}
        />
      </Section>
      <Section title="Customisation">
        <Para>
          <Text variant="subtle" css={{ fontStyle: 'italic' }}>
            Please read the docs on{' '}
            <Link href="/core-concepts/customising-components">
              customising components
            </Link>{' '}
            first.
          </Text>
        </Para>

        <Para>Dialog has the following customisable elements:</Para>

        <Table>
          <Table.Header>Name</Table.Header>
          <Table.Row>DialogContent</Table.Row>
          <Table.Row>DialogOverlay</Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          const components = {
            DialogContent: {
              backgroundColor: 'grey',
              borderRadius: '10px',
              padding: 2
            },
            DialogOverlay: {
              backgroundColor: 'rgba(200,234,234,0.7)'
            }
          }
        `}</Example.Code>
          <Example.Code lang="js">{`
          const [showDialog, setShowDialog] = React.useState(false);
          const open = () => setShowDialog(true);
          const close = () => setShowDialog(false);
          
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider components={components}>
            <button onClick={open}>Open Dialog</button>
            <Dialog isOpen={showDialog} onDismiss={close}>
              <p>The content of the Dialog</p>
              <button onClick={close}>
                Close Dialog
              </button>
            </Dialog>  
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              components={{
                ...base.components,
                DialogContent: {
                  backgroundColor: 'grey',
                  borderRadius: '10px',
                  padding: 2
                },
                DialogOverlay: {
                  backgroundColor: 'rgba(200,234,234,0.7)'
                }
              }}
            >
              <DialogPresenter>
                <p>The content of the Dialog</p>
              </DialogPresenter>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
