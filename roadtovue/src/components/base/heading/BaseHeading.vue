<template>
  <component
    class="block text-2xl font-medium font-heading mb-4"
    :class="[$style.baseHeading, this.$style[this.tag], headingClass]"
    :is="tag"
    v-bind="$attrs"
  >
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    text: String,
    tag: {
      type: String,
      default: 'span',
    },
    headingClass: {},
  },
}
</script>

<style module>
.baseHeading {
  @screen md {
    @apply px-0;
  }
}

.h1 {
  @apply text-3xl;
}

.h2 {
  @apply text-2xl;
}

.h3 {
  @apply text-xl;
}

.h4 {
  @apply text-lg;
}
</style>
