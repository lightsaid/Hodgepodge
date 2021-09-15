<template>
  <div v-show="showLoader">
    <slot />
  </div>
</template>

<script>
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
  data() {
    return {
      // Flag for showing the loader
      showLoader: false,
    }
  },
  watch: {
    show(show) {
      if (show) {
        // Start show loader timeout
        this.timeout = setTimeout(() => {
          this.showLoader = true
        }, this.delay)
      } else {
        // Clear timeout and hide loader
        clearTimeout(this.timeout)
        this.showLoader && (this.showLoader = false)
      }
    },
  },
}
</script>

<style module></style>
