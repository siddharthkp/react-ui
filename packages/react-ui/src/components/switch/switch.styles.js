import { calc } from '../../../utils'

export const styles = {
  SwitchBackground: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'Switch.backgroundOff',
    width: 7,
    height: 4,
    borderRadius: 3
  },
  SwitchToggle: {
    backgroundColor: 'white',
    position: 'absolute',
    width: calc('4 - 2px'),
    height: calc('4 - 2px'),
    left: '1px',
    borderRadius: '50%',
    transition: 'left ease',
    transitionDuration: theme => theme.speeds[3]
  },
  SwitchInput: {
    width: 0,
    opacity: 0,
    position: 'absolute'
  },
  SwitchContainer: {
    'input:checked + [data-component=SwitchBackground]': {
      backgroundColor: 'Switch.backgroundOn'
    },
    'input:checked + [data-component=SwitchBackground] [data-component=SwitchToggle]': {
      left: theme => calc('4 - 3px')
    }
  }
}
