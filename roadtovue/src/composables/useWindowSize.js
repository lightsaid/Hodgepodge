import { ref } from 'vue'

const windowSize = ref({
  width: window.innerWidth,
  height: window.innerHeight,
})

const onResize = () => {
  windowSize.value = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

window.addEventListener('resize', onResize, false)

const cleanup = () => {
  window.removeEventListener('resize', onResize, false)
}

// useWindowSize.js
export const useWindowSize = () => {
  return { windowSize, cleanup }
}
