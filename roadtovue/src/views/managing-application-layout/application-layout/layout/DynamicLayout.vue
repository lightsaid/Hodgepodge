<template>
  <component :is="currentLayoutComponent">
    <template
      v-for="slotName in Object.keys($slots)"
      :key="slotName"
      v-slot:[slotName]="slotProps"
    >
      <slot :name="slotName" v-bind="slotProps" />
    </template>
  </component>
</template>

<script>
import { defineAsyncComponent, computed } from 'vue'
import { useLayout, LAYOUTS } from '../composables/useLayout'

/**
 * Lazy load components
 */
const StandardLayout = defineAsyncComponent(() =>
  import('./components/StandardLayout')
)
const AuthLayout = defineAsyncComponent(() => import('./components/AuthLayout'))
const StandardReverseLayout = defineAsyncComponent(() =>
  import('./components/StandardReverseLayout')
)

// Map components to layout symbols
const layoutComponents = {
  [LAYOUTS.standard]: StandardLayout,
  [LAYOUTS.standardReverse]: StandardReverseLayout,
  [LAYOUTS.auth]: AuthLayout,
}

export default {
  setup() {
    // Initialise layout state
    const { layout } = useLayout()

    const currentLayoutComponent = computed(
      () => layoutComponents[layout.value]
    )
    return {
      layout,
      currentLayoutComponent,
    }
  },
}
</script>

<style module></style>
