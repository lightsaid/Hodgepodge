<template>
  <input
    :class="$style.baseInput"
    v-bind="$attrs"
    :value="$attrs.modelValue"
    @input="e => $emit('update:modelValue', e.target.value)"
  />
</template>

<script>
export default {
  emits: ['update:modelValue'],
}
</script>

<style module>
.baseInput {
  border: 1px solid theme('colors.border.input');
  border-radius: 0.25rem;
  @apply px-2 py-2 max-w-full;
  &:focus {
    outline-color: theme('colors.blue.400');
  }
}
</style>
