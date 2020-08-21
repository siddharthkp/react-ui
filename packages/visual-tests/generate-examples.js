const glob = require('glob')
const fs = require('fs-extra')
const reactuiExports = require('react-ui')

const pathToPages = '../docs/src/pages/components/'
const componentPages = glob.sync(pathToPages + '*.js')

const brokenPages = ['avatar', 'dialog', 'element']

fs.ensureDirSync('./generated-stories')
fs.emptyDirSync('./generated-stories')

componentPages.forEach(page => {
  const name = page.replace(pathToPages, '').replace('.js', '')
  if (brokenPages.includes(name)) return

  const contents = fs.readFileSync(page, 'utf8')

  const examples = []

  contents.split('<Example.Preview').forEach((chunk, index) => {
    if (index === 0) return

    let snippet = chunk
      .split('</Example.Preview>')[0]
      .replace('<Tooltip', '<Tooltip INTERNAL_DEBUG_MODE')

    examples.push(snippet)
  })

  const filePath = `./generated-stories/${name}.js`
  let test = `
    import React from 'react'
    import { ${Object.keys(reactuiExports)} } from 'react-ui'
    import { tokens, components } from 'react-ui/themes/light'
    import * as base from 'react-ui/themes/base'
    import * as dark from 'react-ui/themes/dark'
    import '../fonts.css'

    export default { title: '${name}' };
  `

  examples.forEach((snippet, index) => {
    test += `
      export const Example${index + 1} = () => (
        <ThemeProvider tokens={tokens} components={components}>
          <Stack
            ${snippet}
          </Stack>
        </ThemeProvider>
      )
    `
  })

  fs.writeFileSync(filePath, test, 'utf8')
})
