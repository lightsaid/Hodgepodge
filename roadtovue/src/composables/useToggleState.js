import { ref } from 'vue'

export const useToggleState = (defaultValue = false) => {
  const state = ref(defaultValue)
  const open = () => (state.value = true)
  const close = () => (state.value = false)
  const toggle = () => (state.value = !state.value)

  return {
    state,
    open,
    close,
    toggle,
  }
}
