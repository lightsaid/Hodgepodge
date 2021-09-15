<template>
  <div :class="[$style.baseAlert, $style[variant]]">
    <slot />
  </div>
</template>

<script>
const VARIANTS = ['info']
export default {
  props: {
    variant: {
      type: String,
      default: 'info',
      validation: value => VARIANTS.includes(value),
    },
  },
  created() {
    console.log('Base aleter', this.$style)
  },
}
</script>

<style module>
.baseAlert {
  @apply font-semibold p-4 rounded-lg;
  &.info {
    @apply bg-blue-100 text-blue-700 border border-blue-700;
  }

  &.danger {
    @apply bg-red-100 text-red-700 border border-red-700;
  }
}
</style>
