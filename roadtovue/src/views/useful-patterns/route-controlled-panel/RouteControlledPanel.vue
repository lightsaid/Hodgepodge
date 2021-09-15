<template>
  <div>
    <BaseContentHeading class="mb-4">Route controlled panel</BaseContentHeading>
    <BaseCard class="mb-4">
      <BaseCardTitle>Products panel</BaseCardTitle>
      <BaseCardContent>
        <p class="mb-4">
          Click on one of the products to redirect to route-controlled panel.
        </p>
        <div class="p-4 border">
          <div class="mb-3" v-for="product of products" :key="product.id">
            <router-link
              class="hover:underline"
              :to="`/useful-patterns/route-controlled-panel/${product.id}`"
            >
              {{ product.title }}
            </router-link>
          </div>
        </div>
        <RoutePanelView
      /></BaseCardContent>
    </BaseCard>
  </div>
</template>

<script>
import RoutePanelView from '@/components/common/routePanel/RoutePanelView.vue'
import products from '@/fixtures/products.json'

export default {
  components: {
    RoutePanelView,
  },
  setup() {
    return {
      products,
    }
  },
}
</script>
