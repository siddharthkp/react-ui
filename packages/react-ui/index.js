import { ThemeProvider } from '@ds-tools/primitives'
import { create } from './helpers'

export const Element = create('div', 'Element')
export const ButtonGroup = create('div', 'ButtonGroup')
export const Form = create('form', 'Form')
export const Heading = create('h1', 'Heading')
export const InputGroup = create('div', 'InputGroup')
export const Paragraph = create('p', 'Paragraph')

export * from './components/button'
export * from './components/input'

export { ThemeProvider }
