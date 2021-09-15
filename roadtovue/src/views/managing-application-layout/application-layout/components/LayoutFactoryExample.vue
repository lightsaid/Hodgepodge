<template>
  <div>
    <BaseCard class="mb-4">
      <BaseCardTitle>Factory layout</BaseCardTitle>
      <BaseCardContent>
        This example utilises
        <span class="font-italic">layoutFactory</span> function that is used to
        inject useLayout function into the layout template via props, and to
        de-couple it from layout components.
      </BaseCardContent>
      <BaseCardActions>
        <BaseButton @click.prevent="open">Test layout</BaseButton>
      </BaseCardActions>
    </BaseCard>

    <!-- Products layouts examples -->
    <PanelModal
      class="overflow-y-auto max-h-full"
      @close="close"
      :class="$style.panel"
      :open="isPanelOpen"
    >
      <div class="p-8">
        <!-- First example -->
        <h2 class="font-semibold mb-4 text-2xl text-center">Choose layout</h2>

        <!-- Controls for the first products layout -->
        <div
          class="space-x-4 mb-8 mx-auto flex justify-center items-center mt-4"
        >
          <button @click.prevent="setLayout(LAYOUTS.grid)">
            Layout grid
          </button>
          <button @click.prevent="setLayout(LAYOUTS.list)">Layout list</button>
        </div>

        <!-- First products layout -->
        <ProductLayout class="mx-auto max-w-7-xl mb-12">
          <component
            :is="productCardComponent"
            v-for="product of products"
            :key="product.id"
            :product="product"
          />
        </ProductLayout>

        <!-- Second example -->

        <h2 class="font-semibold mb-4 text-2xl text-center">
          Choose layout - Second example
        </h2>
        <!-- Controls for the second products layout -->

        <div
          class="space-x-4 mb-8 mx-auto flex justify-center items-center mt-4"
        >
          <button @click.prevent="setLayoutTwo(LAYOUTS_TWO.grid)">
            Layout grid
          </button>
          <button @click.prevent="setLayoutTwo(LAYOUTS_TWO.list)">
            Layout list
          </button>
        </div>

        <!-- Second products layout -->
        <ProductLayoutTwo class="mx-auto max-w-7-xl">
          <component
            :is="productCardComponentTwo"
            v-for="product of products"
            :key="product.id"
            :product="product"
          />
        </ProductLayoutTwo>
      </div>
    </PanelModal>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useToggleState } from '@/composables'
import PanelModal from '@/components/common/PanelModal'

import {
  ProductLayout,
  useProductLayout,
} from '../composables/useFactoryProductLayout'

import {
  ProductLayoutTwo,
  useProductLayoutTwo,
} from '../composables/useFactoryProductLayoutTwo'

import products from './products'
import ProductGridCard from './product/ProductGridCard'
import ProductListCard from './product/ProductListCard'
export default {
  name: 'LayoutFactoryExample',
  components: {
    PanelModal,
    ProductLayout,
    ProductLayoutTwo,
  },
  setup() {
    // Toggle state for the PanelModal component
    const { state: isPanelOpen, open, close } = useToggleState(false)
    // Layout composable for the first product example
    const { layout, setLayout, LAYOUTS } = useProductLayout()
    // Layout composable for the second product example
    const {
      layout: layoutTwo,
      setLayout: setLayoutTwo,
      LAYOUTS: LAYOUTS_TWO,
    } = useProductLayoutTwo()

    const productLayoutComponents = {
      [LAYOUTS.grid]: ProductGridCard,
      [LAYOUTS.list]: ProductListCard,
    }

    // Product card component for the first products example
    // LAYOUTS.grid or LAYOUTS.list
    const productCardComponent = computed(
      () => productLayoutComponents[layout.value]
    )

    const productLayoutComponentsTwo = {
      [LAYOUTS_TWO.grid]: ProductGridCard,
      [LAYOUTS_TWO.list]: ProductListCard,
    }

    // Product card component for the second products example
    // LAYOUTS.grid or LAYOUTS.list
    const productCardComponentTwo = computed(
      () => productLayoutComponentsTwo[layoutTwo.value]
    )

    return {
      isPanelOpen,
      open,
      close,
      layout,
      setLayout,
      LAYOUTS,
      products,
      productCardComponent,
      productCardComponentTwo,
      setLayoutTwo,
      LAYOUTS_TWO,
    }
  },
}
</script>
<style module>
.panel {
  width: 90vw;
}
</style>
