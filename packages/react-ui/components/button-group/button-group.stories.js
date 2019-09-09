import React from 'react'
import { Example } from 'react-ui/helpers'

import { ButtonGroup, Button } from 'react-ui'
export default { title: 'Button Group' }

export const Simple = () => (
  <Example>
    <ButtonGroup>
      <Button>Clickity</Button>
      <Button>Clickity</Button>
      <Button>Clickity</Button>
    </ButtonGroup>
  </Example>
)
