<template>
  <div class="p-8 overflow-y-auto" :class="$style.container">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-semibold">Scroll to the bottom!</h2>
      <div class="sticky mt-8" :class="$style.status">
        {{ status }}
      </div>
    </div>
    <BaseButton
      class="ml-4"
      variant="primary-outline"
      @click.prevent="resetRender"
      >Reset render</BaseButton
    >
    <div class="h-full"></div>
    <div ref="veryLargeComponentContainer">
      <VeryLargeComponent v-if="loadVeryLargeComponent" />
    </div>
  </div>
</template>

<script>
import { ref, watch, defineAsyncComponent } from 'vue'
import { useIntersectionObserver } from '@/composables'

const VeryLargeComponent = defineAsyncComponent(() =>
  import('./VeryLargeComponent')
)

export default {
  emits: ['close-panel'],
  setup() {
    const status = ref('Not rendered')
    const loadVeryLargeComponent = ref(false)
    const containerRef = ref(null)
    const { isIntersecting } = useIntersectionObserver(containerRef)

    // Observe if an element is intersecting
    // If it is then load the component
    watch(isIntersecting, isIntersecting => {
      if (!isIntersecting) return
      status.value = 'Rendered'
      loadVeryLargeComponent.value = true
    })

    /**
     * Reset rendered status of the lazy loaded component
     */
    const resetRender = () => {
      status.value = 'Not rendered'
      loadVeryLargeComponent.value = false
    }

    return {
      veryLargeComponentContainer: containerRef,
      status,
      loadVeryLargeComponent,
      resetRender,
    }
  },
  components: {
    VeryLargeComponent,
  },
  /*

    ==============================

    Lazy load with an Intersection Observer
    using Options API

    ==============================

  data() {
    return {
      status: 'Not rendered',
      loadVeryLargeComponent: false,
    }
  },
  methods: {
    resetRender() {
      this.status = 'Not rendered'
      this.loadVeryLargeComponent = false
    },
  },


  mounted() {
    // IntersectionObserver options
    const options = {
      root: this.$el,
    }

    // Render the VeryLargeComponent when the container intersects
    const intersectionCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadVeryLargeComponent = true
          this.status = 'Rendered'
        }
      })
    }
    const observer = new IntersectionObserver(intersectionCallback, options)
    // Assign observer on the $options object so we can access it in the onUnmounted hook
    this.$options.observer = observer
    // Start observing the container
    const $el = this.$refs.veryLargeComponentContainer
    observer.observe($el)
  },
  // Cleanup
  onUnmounted() {
    this.$options.observer.disconnect()
  },
  */
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
