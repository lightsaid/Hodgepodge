<script>
import { ref, watch, onMounted } from 'vue'
import { useIntersectionObserver } from '@/composables'

const isClient = typeof window !== 'undefined'

/**
 * Load when a user scrolls to an element
 */
const loadOnIntersect = ({ containerRef, loadComponent, observerOptions }) => {
  const { isIntersecting } = useIntersectionObserver(
    containerRef,
    observerOptions
  )

  // Trigger load on intersect
  watch(isIntersecting, isIntersecting => {
    isIntersecting && loadComponent()
  })
}

const loadOnIdle = ({ loadComponent, idleTimeout }) => {
  // Load component immediately if not in the browser environment
  // or if one of the necessary APIs is not supported
  if (
    !isClient ||
    !('requestIdleCallback' in window || !('requestAnimationFrame' in window))
  ) {
    loadComponent()
    return
  }

  // Load the component when the browser is free or schedule it
  // after the timeout is reached
  requestIdleCallback(
    () => {
      requestAnimationFrame(loadComponent)
    },
    { timeout: idleTimeout }
  )
}

export default {
  emits: ['loaded'],
  props: {
    idleTimeout: {
      type: Number,
      default: 3000,
    },
    onIdle: {
      type: Boolean,
      default: false,
    },
    onVisible: {
      type: [Object, Boolean],
      default: null,
    },
  },
  setup(props, { slots, emit }) {
    const isComponentLoaded = ref(false)
    const containerRef = ref(null)
    let loadType = 'onIdle'

    if (props.onIdle) loadType = 'onIdle'
    else if (props.onVisible) loadType = 'onVisible'

    const config = {
      onIdle: loadOnIdle,
      onVisible: loadOnIntersect,
    }

    const loadComponent = () => {
      isComponentLoaded.value = true
      emit('loaded')
    }

    // Call appropriate handler
    config[loadType]({
      containerRef,
      loadComponent,
      idleTimeout: props.idleTimeout,
      observerOptions:
        typeof props.onVisible === 'object' ? props.onVisible : {},
    })
    /**
     * If component is to be loaded then pass through slots
     * Otherwise, render a div with a ref that is needed for
     * the Intersection Observer
     */
    return () =>
      isComponentLoaded.value ? slots.default() : <div ref={containerRef} />
  },
}
</script>
