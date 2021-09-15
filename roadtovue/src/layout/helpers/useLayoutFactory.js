import { ref, computed } from 'vue'

/**
 * @param {object} param
 * @param {object} param.layoutComponents
 * @param {object} param.LAYOUTS
 * @param {symbol} param.defaultLayout
 * @returns {function}
 */
export const useLayoutFactory = ({
  layoutComponents,
  LAYOUTS,
  defaultLayout,
}) => {
  // Store a value of currently selected layout
  // Must be one of values from the LAYOUTS object
  const layout = ref(defaultLayout)

  // Return currently selected layout
  const currentLayoutComponent = computed(() => layoutComponents[layout.value])

  // Change layout, layoutType must be one of values from the LAYOUTS
  const setLayout = layoutType => {
    layout.value = layoutType
  }

  const useLayout = () => {
    return {
      currentLayoutComponent,
      layout,
      setLayout,
      LAYOUTS,
    }
  }

  return {
    useLayout,
  }
}
