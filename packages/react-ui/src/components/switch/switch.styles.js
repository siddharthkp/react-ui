import { calc } from '../../../utils'

export const styles = {
  SwitchBackground: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'Switch.backgroundOff',
    width: '100%',
    height: 'Switch'
  },
  SwitchToggle: {
    backgroundColor: 'white',
    position: 'absolute',
    width: calc('Switch - 2px'),
    height: calc('Switch - 2px'),
    left: 0,
    marginX: '1px', // offset 1px for snug fit
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
    borderRadius: 3,
    overflow: 'hidden',
    cursor: 'pointer',

    'input:checked + [data-component=SwitchBackground]': {
      backgroundColor: 'Switch.backgroundOn'
    },
    'input:checked + [data-component=SwitchBackground] [data-component=SwitchToggle]': {
      left: calc('100% - Switch')
    },
    'input:disabled + [data-component=SwitchBackground]': {
      opacity: 0.4,
      cursor: 'not-allowed'
    }
  }
}
