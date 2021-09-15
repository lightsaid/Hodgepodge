<template>
  <div :class="$style.baseCardActions">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style module>
.baseCardActions {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
  @apply pb-4 px-4 pt-2;
}
</style>
