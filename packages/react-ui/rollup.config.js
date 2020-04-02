import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'

import pkg from './package.json'

const plugins = [
  external({
    includeDependencies: true
  }),
  resolve(),
  babel({
    presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
    exclude: 'node_modules/**'
  }),
  commonjs()
]

export default [
  {
    input: pkg.source,
    output: [{ file: pkg.main, format: 'cjs' }],
    plugins
  },
  {
    input: ['src/themes/base.js', 'src/themes/light.js', 'src/themes/dark.js'],
    output: [
      {
        dir: 'dist/themes/',
        format: 'cjs',
        exports: 'named'
      }
    ],
    plugins
  }
]
