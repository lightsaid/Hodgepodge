<template>
  <div :class="$style.listLayout">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style module>
.listLayout {
  > * {
    min-height: 150px;
  }
}
</style>
