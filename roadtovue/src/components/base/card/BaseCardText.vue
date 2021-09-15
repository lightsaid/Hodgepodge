<template>
  <div :class="$style.baseCardText">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style module>
.baseCardText {
  @apply px-4 pb-4;
}
</style>
