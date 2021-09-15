<template>
  <component :is="tag">
    <fa-icon v-bind="$attrs">
      <slot />
    </fa-icon>
  </component>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'span',
    },
  },
}
</script>

<style module></style>
