import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'
import replace from 'rollup-plugin-replace'
import reactRemovePropTypes from 'babel-plugin-transform-react-remove-prop-types'

import pkg from './package.json'

const getPlugins = (isProd) => {
  return [
    external({ includeDependencies: true }),
    resolve(),
    babel({
      presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
      plugins: [isProd && [reactRemovePropTypes, { mode: 'wrap' }]].filter(Boolean), // using wrap to include propTypes only when process.env.NODE_ENV !== "production" 
      exclude: 'node_modules/**'
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development') }),
    commonjs(),
    json(),
    isProd && terser()
  ].filter(Boolean) // filtering boolean values
}

const cjs = [{
  input: pkg.source,
  output: { file: `dist/${pkg.name}.js`, format: 'cjs', sourcemap: true, esModule: false },
  plugins: getPlugins(false) // dev env plugins
}, {
  input: pkg.source,
  output: { file: `dist/${pkg.name}.min.js`, format: 'cjs', sourcemap: true },
  plugins: getPlugins(true) // prod env plugins
}];

export default [
  ...cjs, {
    input: ['src/themes/base.js', 'src/themes/light.js', 'src/themes/dark.js'],
    output: [
      { dir: 'dist/themes/', format: 'cjs', exports: 'named' },
      { dir: 'themes', format: 'cjs', exports: 'named' }
    ],
    plugins: getPlugins(true)
  }
]
