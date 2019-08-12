import { ThemeProvider } from '@ds-tools/primitives'
import { create } from './helpers'

export const Element = create('button', 'Element')
export const ButtonGroup = create('div', 'ButtonGroup')
export const Form = create('form', 'Form')
export const Heading = create('h1', 'Heading')
export const Input = create('input', 'Input')
export const InputGroup = create('div', 'InputGroup')
export const Paragraph = create('p', 'Paragraph')

export * from './src/button'

export { ThemeProvider }
