<template>
  <div>
    <BaseCard class="mb-4">
      <BaseCardTitle>Dynamic product layout</BaseCardTitle>
      <BaseCardContent>
        Page layout is not the only type of layout. Another good example is a
        list of products. By default, products might be displayed in a grid
        layout, but we might want to let user choose a more compact list layout.
      </BaseCardContent>
      <BaseCardActions>
        <BaseButton @click.prevent="open">Test layout</BaseButton>
      </BaseCardActions>
    </BaseCard>

    <!-- Products layouts examples -->

    <PanelModal
      class="overflow-y-auto max-h-full"
      :class="$style.panel"
      :open="isPanelOpen"
      @close="close"
    >
      <div class="p-8">
        <h2 class="font-semibold mb-4 text-2xl text-center">Choose layout</h2>
        <!-- Layout controls -->
        <div class="flex justify-center space-x-6 mb-8">
          <BaseButton
            variant="primary-outline"
            @click.prevent="setLayout(LAYOUTS.grid)"
            >Grid</BaseButton
          >
          <BaseButton
            variant="primary-outline"
            @click.prevent="setLayout(LAYOUTS.list)"
            >List</BaseButton
          >
        </div>

        <div class="text-center mb-8">
          <p>Current layout: {{ layout }}</p>
        </div>

        <!-- Products layout example -->
        <ProductLayout class="mb-8">
          <template #="{layout}">
            <component
              :is="productCardComponent"
              v-for="product of products"
              :key="product.id"
              :product="product"
            />
          </template>
        </ProductLayout>
        <div class="flex items-center justify-center">
          <BaseButton @click.prevent="close">Close modal</BaseButton>
        </div>
      </div>
    </PanelModal>
  </div>
</template>

<script>
import { defineAsyncComponent, ref, computed, onMounted } from 'vue'
import { useToggleState } from '@/composables'
import PanelModal from '@/components/common/PanelModal'
import ProductLayout from '../layout/ProductLayout'
import { useProductLayout } from '../composables/useProductLayout'
import products from './products.json'

/**
 * Lazy load components
 */
const ProductGridCard = defineAsyncComponent(() =>
  import('./product/ProductGridCard')
)
const ProductListCard = defineAsyncComponent(() =>
  import('./product/ProductListCard')
)

export default {
  name: 'ProductLayoutExample',
  components: {
    PanelModal,
    ProductLayout,
  },
  setup() {
    // Toggle state for the PanelModal component

    const { state: isPanelOpen, open, close } = useToggleState(false)
    // Layout composable for the products layout
    const { layout, setLayout, LAYOUTS } = useProductLayout()

    const PRODUCT_COMPONENTS = {
      [LAYOUTS.grid]: ProductGridCard,
      [LAYOUTS.list]: ProductListCard,
    }
    // Product card component for the products layout example
    // LAYOUTS.grid or LAYOUTS.list
    const productCardComponent = computed(
      () => PRODUCT_COMPONENTS[layout.value]
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
    }
  },
}
</script>

<style module>
.panel {
  width: 90vw;
}
</style>
