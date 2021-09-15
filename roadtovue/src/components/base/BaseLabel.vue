<template>
  <label :class="$style.baseLabel" v-bind="$attrs">
    <slot />
  </label>
</template>

<script>
export default {}
</script>

<style module>
.baseLabel {
  @apply font-semibold;
}
</style>
