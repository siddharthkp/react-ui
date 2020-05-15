import React from 'react'
import { Element } from '../../primitives'
import * as ReachDialog from '@reach/dialog'
import { styles } from './dialog.styles'
import { merge } from '../../utils'

const Dialog = ({ css, children, isOpen, onDismiss, ...props }) => (
  <Element
    as={ReachDialog.DialogOverlay}
    component="DialogOverlay"
    css={merge(styles.DialogOverlay, css)}
    isOpen={isOpen}
    onDismiss={onDismiss}
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

export { Dialog }
