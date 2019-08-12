#!/usr/bin/env node

const argv = require('yargs-parser')(process.argv.slice(2))

if (argv._.includes('start')) {
  require('@storybook/react/dist/server')
} else if (argv._.includes('build')) {
  process.env.NODE_ENV = process.env.NODE_ENV || 'production'
  require('@storybook/react/dist/server/build')
}
