<template>
  <div class="p-8 overflow-y-auto" :class="$style.container">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-semibold">
        {{
          loadType === 'onVisible'
            ? 'Scroll to the bottom!'
            : 'Loaded when Idle!'
        }}
      </h2>
      <div class="sticky mt-8" :class="$style.status">
        {{ status }}
      </div>
    </div>

    <div class="mb-4">Load type: {{ loadType }}</div>

    <div class="mb-4">
      <BaseButton variant="primary-outline" @click.prevent="toggleLoadType"
        >Toggle load type</BaseButton
      >
      <BaseButton class="ml-4" variant="link" @click.prevent="resetRender"
        >Reset render</BaseButton
      >
    </div>

    <div class="h-full"></div>
    <LazyLoad
      :[loadType]="loadTypeValue"
      v-if="renderLazyLoad"
      @loaded="onLoaded"
    >
      <VeryLargeComponent />
    </LazyLoad>
  </div>
</template>

<script>
import {
  ref,
  watch,
  defineAsyncComponent,
  getCurrentInstance,
  nextTick,
} from 'vue'
import LazyLoad from './LazyLoad'

const VeryLargeComponent = defineAsyncComponent(() =>
  import('./VeryLargeComponent')
)

export default {
  name: 'LazyPanelContentWithCustomLazyLoad',
  emits: ['close-panel'],
  components: {
    VeryLargeComponent,
    LazyLoad,
  },
  setup() {
    const status = ref('Not rendered')
    const loadType = ref('onIdle')
    const loadTypeValue = ref(true)
    const renderLazyLoad = ref(true)

    /**
     * Reset rendered status of the lazy loaded component
     */
    const resetRender = async () => {
      status.value = 'Not rendered'

      renderLazyLoad.value = false
      await nextTick()
      renderLazyLoad.value = true
    }

    const onLoaded = () => (status.value = 'Rendered')

    /**
     * Change the default type of lazy loading
     */
    const toggleLoadType = () => {
      loadType.value = loadType.value === 'onVisible' ? 'onIdle' : 'onVisible'
      loadTypeValue.value = loadType.value === 'onVisible' ? {} : true
      resetRender()
    }

    return {
      status,
      resetRender,
      onLoaded,
      renderLazyLoad,
      loadType,
      loadTypeValue,
      toggleLoadType,
    }
  },
}
</script>

<style module>
.container {
  height: 150vh;
  max-height: 100vh;
  overflow: auto;
}

.status {
  position: fixed;
  top: 2.5rem;
  right: 3rem;
}
</style>
