import { calc } from '../../utils'

export const styles = {
  SwitchBackground: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: 4
  },
  SwitchToggle: {
    width: 4,
    height: 4,
    position: 'absolute',
    left: 0,
    backgroundColor: 'white',
    border: '2px solid',
    borderRadius: '50%',
    transition: 'left ease',
    transitionDuration: 3
  },
  SwitchInput: {
    width: 0,
    opacity: 0,
    position: 'absolute'
  },
  SwitchContainer: {
    display: 'inline-block',
    width: 7,
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',

    '[data-component=SwitchBackground]': {
      backgroundColor: 'Switch.backgroundOff'
    },
    '[data-component=SwitchToggle]': {
      borderColor: 'Switch.backgroundOff'
    },
    'input:checked + [data-component=SwitchBackground]': {
      backgroundColor: 'Switch.backgroundOn'
    },
    'input:checked + [data-component=SwitchBackground] [data-component=SwitchToggle]': {
      borderColor: 'Switch.backgroundOn',
      left: calc('100% - 4')
    },
    'input:disabled + [data-component=SwitchBackground]': {
      opacity: 0.4,
      cursor: 'not-allowed'
    }
  }
}
