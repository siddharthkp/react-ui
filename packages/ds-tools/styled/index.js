import emotion from '@emotion/styled'
import css from '@styled-system/css'

function styled(styles, tag) {
  return emotion[tag](css(styles))
}

// styled.button
Object.keys(emotion).map(tag => {
  styled[tag] = function(styles) {
    return styled(styles, tag)
  }
})

export default styled
