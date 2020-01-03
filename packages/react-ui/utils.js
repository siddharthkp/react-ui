import merge from 'deepmerge'

export const mergeFns = (a, b) => {
  return (...args) => {
    if (typeof a === 'function') a(...args)
    if (typeof b === 'function') b(...args)
  }
}

export { merge }
