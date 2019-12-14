import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'

import pkg from './package.json'

export default [
  {
    input: pkg.source,

    plugins: [
      external({
        includeDependencies: true
      }),
      resolve(),
      babel({
        presets: [
          ['@babel/preset-env', { modules: false }],
          '@babel/preset-react'
        ],
        exclude: 'node_modules/**'
      }),
      commonjs()
    ],
    output: [{ file: pkg.main, format: 'cjs' }]
  }
]
