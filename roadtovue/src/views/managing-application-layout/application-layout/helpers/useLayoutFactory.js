/**
 * Return a new useLayout composable
 * Using this factory method ensures that different layouts
 * have an independent state
 */

import { ref } from 'vue'

export const useLayoutFactory = (LAYOUTS, defaultLayout) => {
  const layout = ref(defaultLayout || 'div')

  const setLayout = layoutType => {
    layout.value = layoutType
  }

  const useLayout = () => {
    return {
      layout,
      setLayout,
      LAYOUTS,
    }
  }

  return {
    useLayout,
  }
}
