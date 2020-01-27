import deepmerge from 'deepmerge'

export const merge = (a = {}, b = {}) => deepmerge(a, b)

export const mergeFns = (a, b) => {
  return (...args) => {
    if (typeof a === 'function') a(...args)
    if (typeof b === 'function') b(...args)
  }
}

const hasUnits = value => {
  if (typeof value !== 'string') return false
  else if (value.includes('%')) return true
  else if (value.match(/[a-z]/i)) return true
}

export const calc = string => {
  let operator
  if (string.includes('+')) operator = '+'
  else if (string.includes('-')) operator = '-'
  else if (string.includes('/')) operator = '/'
  else if (string.includes('*')) operator = '*'
  if (!operator) return string

  let [a, b] = string.split(operator)
  a = a.trim()
  b = b.trim()

  return theme => {
    a = hasUnits(a) ? a : theme.space[a]

    // dont multiple or divide pixcels
    b = hasUnits(b) || ['*', '/'].includes(operator) ? b : theme.space[b]

    return `calc(${a} ${operator} ${b})`
  }
}
