<template>
  <div :class="$style.baseCardContent">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style module>
.baseCardContent {
  @apply px-4 pb-4;
}
</style>
