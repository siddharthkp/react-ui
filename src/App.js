import React from 'react'

import {
  Element,
  Button,
  ButtonGroup,
  Form,
  Heading,
  Input,
  InputGroup,
  Paragraph,
  ThemeProvider
} from './react-ui'

import theme from './theme/theme.js'
import './theme/theme.css'

import './App.css'

function App() {
  return (
    <div className="av-App">
      <span role="img" aria-label="avocado">
        🥑
      </span>
      <br />
      <ThemeProvider theme={theme}>
        <Button>Clickity</Button>
        <br />
        <br />
        <ButtonGroup>
          <Button>Clickity</Button>
          <Button>Clickity</Button>
          <Button>Clickity</Button>
        </ButtonGroup>
        <br />
        <Element as="section" component="DangerZone">
          <Heading as="h4" css={{ marginBottom: 3 }}>
            Delete This Repo?
          </Heading>
          <Paragraph css={{ marginBottom: 2 }}>
            Are you sure you want to delete this repo?
          </Paragraph>
          <InputGroup>
            <Input placeholder="Enter name" />
            <Button>Clickity</Button>
          </InputGroup>
        </Element>
        <br />
        <Form className="inline">
          <InputGroup>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>Submit</Button>
          </InputGroup>
        </Form>
      </ThemeProvider>
      <br />
      <hr />
      <br />
      <span role="img" aria-label="avocado">
        🥑
      </span>
      <br />
      <button className="av-button">Clickity</button>
      <br />
      <br />
      <div className="av-button-group">
        <button className="av-button">Clickity</button>
        <button className="av-button">Clickity</button>
        <button className="av-button">Clickity</button>
      </div>
      <br />
      <section className="av-danger-zone">
        <h4 className="av-heading">Delete This Repo?</h4>
        <p className="av-paragraph">
          Are you sure you want to delete this repo?
        </p>
        <div className="av-input-group">
          <input type="text" className="av-input" placeholder="Enter name" />
          <button className="av-button">Clickity</button>
        </div>
      </section>
      <br />

      <form className="av-form inline">
        <div className="av-input-group">
          <input
            css={{ width: '80px' }}
            className="av-input"
            placeholder="username"
          />
          <input className="av-input" placeholder="password" />
          <button className="av-button">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
