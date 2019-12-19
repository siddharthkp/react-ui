export const styles = {
  SwitchBackground: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'grays.400',
    width: 7,
    height: 4,
    borderRadius: 3
  },
  SwitchToggle: {
    backgroundColor: 'white',
    position: 'absolute',
    width: theme => theme.space[4] - 2,
    height: theme => theme.space[4] - 2,
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
      backgroundColor: 'greens.700'
    },
    'input:checked + [data-component=SwitchBackground] [data-component=SwitchToggle]': {
      left: theme => theme.space[4] - 3
    }
  }
}
