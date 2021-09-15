<template>
  <div :class="[$style.lazyModal, open && $style.open]">
    <div class="absolute top-0 right-0 mt-4 mr-4">
      <BaseButton @click.prevent="$emit('close')" variant="link"
        >Close</BaseButton
      >
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    open(value) {
      if (value) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
  },
}
</script>

<style module>
.lazyModal {
  position: fixed;
  top: 0;
  right: 0;
  width: 40vw;
  min-height: 100vh;
  @apply bg-gray-100 shadow-lg transition-transform transform translate-x-full duration-500;

  &.open {
    @apply translate-x-0;
  }
}
</style>
