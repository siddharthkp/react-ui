import { ThemeProvider } from '@ds-tools/primitives'
import { create } from './helpers'

export const Element = create('div', 'Element')
export const Form = create('form', 'Form')
export const Heading = create('h1', 'Heading')
export const Paragraph = create('p', 'Paragraph')

export * from './src/components/button'
export * from './src/components/button-group'
export * from './src/components/input'
export * from './src/components/input-group'

export { ThemeProvider }
