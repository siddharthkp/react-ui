import React from 'react'
import { Element } from '../../primitives'
import * as ReachDialog from '@reach/dialog'
import { styles } from './dialog.styles'
import { merge } from '../../utils'

const DialogContent = ({ css, ...props }) => (
  <Element
    as={ReachDialog.DialogContent}
    component="DialogContent"
    css={merge(styles.DialogContent, css)}
    {...props}
  />
)

const DialogOverlay = ({ css, ...props }) => (
  <Element
    as={ReachDialog.DialogOverlay}
    component="DialogContent"
    css={merge(styles.DialogOverlay, css)}
    {...props}
  />
)

const Dialog = ({ css, children, ...props }) => (
  <Element
    as={ReachDialog.DialogOverlay}
    component="DialogOverlay"
    css={merge(styles.DialogOverlay, css)}
  >
    <Element
      as={ReachDialog.DialogContent}
      component="DialogContent"
      css={merge(styles.DialogContent, css)}
      {...props}
    >
      {children}
    </Element>
  </Element>
)

Dialog.Overlay = DialogOverlay
Dialog.Content = DialogContent

export { Dialog }
