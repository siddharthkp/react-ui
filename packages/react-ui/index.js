import { create } from './helpers'

export const Heading = create('h1', 'Heading')
export const Paragraph = create('p', 'Paragraph')

export * from './src/components/button'
export * from './src/components/button-group'
export * from './src/components/input'
export * from './src/components/input-group'
export * from './src/components/form'

export * from './src/components/theme-provider'

export { Element } from './primitives'

export const version = '100.0.0'
