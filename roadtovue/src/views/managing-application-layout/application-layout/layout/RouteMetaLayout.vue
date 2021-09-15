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
import { defineAsyncComponent } from 'vue'

const StandardLayout = defineAsyncComponent(() =>
  import('./components/StandardLayout')
)
const StandardReverseLayoutVue = defineAsyncComponent(() =>
  import('./components/StandardReverseLayout.vue')
)
const AuthLayout = defineAsyncComponent(() => import('./components/AuthLayout'))

const layoutComponents = {
  standard: StandardLayout,
  standardReverse: StandardReverseLayoutVue,
  auth: AuthLayout,
}

export default {
  data() {
    return {
      layout: '',
    }
  },
  computed: {
    currentLayoutComponent() {
      return layoutComponents[this.layout]
    },
  },
  watch: {
    '$router.currentRoute.value.meta.layout': {
      handler(value) {
        this.layout = value ||= 'standard'
      },
      immediate: true,
    },
  },
}
</script>

<style module></style>
