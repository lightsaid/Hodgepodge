<template>
  <component
    :is="tag"
    :class="[$style.baseButton, $style[`baseButton-${variant}`], buttonClass]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    variant: {
      type: String,
      default: 'primary',
      validator: value =>
        ['primary', 'primary-outline', 'link'].includes(value),
    },
    buttonClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style module>
.baseButton {
  min-width: 4rem;
  @apply px-3 py-2 rounded-md inline-block cursor-pointer outline-none transition-colors duration-200;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    @apply bg-gray-500;
  }

  &-primary {
    @apply bg-blue-700 text-blue-100;

    &:hover {
      @apply bg-blue-800;
    }
  }

  &-primary-outline {
    @apply border border-blue-700 text-blue-700;
    &:hover {
      @apply bg-blue-700 text-blue-100;
    }
  }

  &-link {
    @apply text-blue-700 px-0;

    &:hover {
      @apply text-blue-900 underline;
    }
  }
}
</style>
