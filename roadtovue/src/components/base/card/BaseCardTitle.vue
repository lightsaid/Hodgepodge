<template>
  <component :class="$style.baseCardTitle" :is="tag">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: [String, Object],
      default: 'div',
    },
  },
}
</script>

<style module>
.baseCardTitle {
  @apply p-4 text-xl font-medium block font-heading;
  @screen md {
    @apply text-xl;
  }
}
</style>
