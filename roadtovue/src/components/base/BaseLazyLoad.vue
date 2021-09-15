<template>
  <div v-show="showLoader">
    <slot />
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    delay: {
      type: Number,
      default: 500,
    },
  },
  setup(props) {
    // Flag for showing the loader
    const showLoader = ref(false)
    // Store timeout with will turn on loader after a delay
    let timeout = null

    // Run any time loader should be switched on or off
    watch(
      () => props.show,
      show => {
        // Start show loader timeout
        if (show) {
          timeout = setTimeout(() => {
            showLoader.value = true
          }, props.delay)
        } else {
          // Clear timeout and hide loader
          clearTimeout(timeout)
          showLoader.value && (showLoader.value = false)
        }
      }
    )

    return {
      showLoader,
    }
  },
}
</script>

<style module></style>
