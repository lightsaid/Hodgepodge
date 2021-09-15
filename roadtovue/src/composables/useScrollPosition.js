import { ref } from 'vue'

// Define reactive value outside of the useScrollPosition
const scrollY = ref(window.scrollY)

// Scroll handler
const onScroll = () => {
  scrollY.value = window.scrollY
}

window.addEventListener('scroll', onScroll, false)

// Cleanup method if needed
const cleanup = () => {
  window.removeEventListener('scroll', onScroll, false)
}

// Return references to the state and cleanup method
export const useScrollPosition = () => {
  return { scrollY, cleanup }
}
