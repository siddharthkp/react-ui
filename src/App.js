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
    <div className="App">
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
      <button className="Button">Clickity</button>
      <br />
      <br />
      <div className="ButtonGroup">
        <button className="Button">Clickity</button>
        <button className="Button">Clickity</button>
        <button className="Button">Clickity</button>
      </div>
      <br />
      <section className="DangerZone">
        <h4 className="Heading">Delete This Repo?</h4>
        <p className="Paragraph">Are you sure you want to delete this repo?</p>
        <div className="InputGroup">
          <input type="text" className="Input" placeholder="Enter name" />
          <button className="Button">Clickity</button>
        </div>
      </section>
      <br />

      <form className="Form inline">
        <div className="InputGroup">
          <input
            css={{ width: '80px' }}
            className="Input"
            placeholder="username"
          />
          <input className="Input" placeholder="password" />
          <button className="Button">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
