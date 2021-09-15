import { h } from 'vue'
import { useLayoutFactory } from './useLayoutFactory'

/**
 * @param {object} param
 * @param {object} param.LayoutComponent
 * @param {object} param.layoutComponents
 * @param {object} param.LAYOUTS
 * @param {symbol} param.defaultLayout
 * @returns {function}
 */
export const layoutFactory = ({
  LayoutComponent,
  layoutComponents,
  LAYOUTS,
  defaultLayout,
}) => {
  /**
   * Initialise state for the LayoutComponent
   */
  const { useLayout } = useLayoutFactory({
    layoutComponents,
    LAYOUTS,
    defaultLayout,
  })

  // Functional wrapper component
  const Component = (props, { attrs, slots }) => {
    // Add useLayout function as a prop to passed LayoutComponent
    const options = { useLayout, ...props, ...attrs }
    return h(LayoutComponent, options, slots)
  }

  return {
    LayoutComponent: Component,
    useLayout,
  }
}
