import React from 'react'
import deepmerge from 'deepmerge'

let stylesCache = {}

export const useDesigner = designMode => {
  if (!designMode) return null

  const [allChanges, setAllChanges] = React.useState({})
  const [changeCount, setChangeCount] = React.useState(0)
  const [selectedElement, setSelectedElement] = React.useState(null)

  const setChanges = (label, styles) => {
    setAllChanges(allChanges => {
      allChanges[label] = deepmerge(allChanges[label] || {}, styles)
      return allChanges
    })
    // triggers a change in ui
    setChangeCount(changeCount + 1)
  }

  const getChanges = label => {
    return allChanges[label]
  }

  const setStylesCache = (label, styles) => {
    stylesCache[label] = styles
  }

  const getFromStylesCache = label => {
    return stylesCache[label]
  }

  const designer = {
    allChanges,
    setChanges,
    getChanges,
    changeCount,
    stylesCache,
    setStylesCache,
    getFromStylesCache,
    selectedElement,
    setSelectedElement
  }

  window.designer = designer
  return designer
}
