/**
 * Initial useLayout
 * This composable is not that reusable, as it shares
 * the same ref between all places that use the useLayout composable below
 * This problem is fixed by using useLayoutFactory
 */

import { ref } from 'vue'

export const LAYOUTS = {
  standard: Symbol('standard'),
  standardReverse: Symbol('standardReverse'),
  auth: Symbol('auth'),
}

const layout = ref(LAYOUTS.standard)

const setLayout = layoutType => {
  layout.value = layoutType
}

export const useLayout = () => {
  return {
    layout,
    setLayout,
    LAYOUTS,
  }
}
