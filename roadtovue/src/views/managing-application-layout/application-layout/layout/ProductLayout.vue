<template>
  <component :is="currentLayoutComponent">
    <template
      v-for="slotName in Object.keys($slots)"
      :key="slotName"
      v-slot:[slotName]="slotProps"
    >
      <slot :name="slotName" :layout="layout" v-bind="slotProps" />
    </template>
  </component>
</template>

<script>
import { computed } from 'vue'
import GridLayout from './components/GridLayout'
import ListLayout from './components/ListLayout'

import { useProductLayout, LAYOUTS } from '../composables/useProductLayout'

const layoutComponents = {
  [LAYOUTS.grid]: GridLayout,
  [LAYOUTS.list]: ListLayout,
}

export default {
  setup() {
    const { layout } = useProductLayout()

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
