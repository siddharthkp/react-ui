import React from 'react'
import { Element as BaseElement, ThemeProvider } from '../ds-tools'

function create(element, Name) {
  const Component = function(props) {
    return <BaseElement as={element} component={Name} {...props} />
  }
  Component.displayName = Name
  return Component
}

export const Element = create('button', 'Element')
export const Button = create('button', 'Button')
export const ButtonGroup = create('div', 'ButtonGroup')
export const Form = create('form', 'Form')
export const Heading = create('h1', 'Heading')
export const Input = create('input', 'Input')
export const InputGroup = create('div', 'InputGroup')
export const Paragraph = create('p', 'Paragraph')
export { ThemeProvider }
