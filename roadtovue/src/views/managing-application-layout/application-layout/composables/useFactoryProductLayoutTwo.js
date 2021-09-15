/**
 * Create a new layout state using layoutFactory
 * This one is for the second product example
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
  LayoutComponent: ProductLayoutTwo,
  useLayout: useProductLayoutTwo,
} = layoutFactory({
  LayoutComponent: ProductLayoutComponent,
  layoutComponents,
  LAYOUTS,
  defaultLayout: LAYOUTS.list,
})

export { ProductLayoutTwo, useProductLayoutTwo, LAYOUTS }
