import { ThemeProvider } from '@ds-tools/primitives'
import { create } from './helpers'

export const Element = create('div', 'Element')
export const Form = create('form', 'Form')
export const Heading = create('h1', 'Heading')
export const Paragraph = create('p', 'Paragraph')

export * from './components/button'
export * from './components/button-group'
export * from './components/input'
export * from './components/input-group'

export { ThemeProvider }
