/**
 * Create a new layout state using layoutFactory
 * This one is for the first product example
 */

import { layoutFactory } from '@/layout/helpers/layoutFactory'
import ProductLayoutComponent from '../layout/LayoutTemplate.vue'
import GridLayout from '../layout/components/GridLayout'
import ListLayout from '../layout/components/ListLayout'

const LAYOUTS = {
  grid: Symbol('grid'),
  list: Symbol('list'),
}

const layoutComponents = {
  [LAYOUTS.grid]: GridLayout,
  [LAYOUTS.list]: ListLayout,
}

const {
  LayoutComponent: ProductLayout,
  useLayout: useProductLayout,
} = layoutFactory({
  LayoutComponent: ProductLayoutComponent,
  layoutComponents,
  LAYOUTS,
  defaultLayout: LAYOUTS.grid,
})

export { ProductLayout, useProductLayout, LAYOUTS }
