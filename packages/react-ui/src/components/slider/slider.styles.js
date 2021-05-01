export const styles = {
    Slider: {
      appearance: "none",
      border: 'none',
      backgroundColor:'Slider.backgroundTrack',
      borderRadius: 1,
      outline: 'none',
      height: 2,
      cursor:  'pointer',
      '::-webkit-slider-thumb':{
        cursor:  'inherit',
        '-webkit-appearance': 'none',
        backgroundColor: 'Slider.backgroundThumb',
        height: 4,
        width:  4,
        borderRadius: '100%',
      }
    }
  }