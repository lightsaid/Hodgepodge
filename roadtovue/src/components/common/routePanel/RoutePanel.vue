<template>
  <div :class="[$style.routePanel, panelClass]">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    panelClass: {},
  },
}
</script>
<style module>
.routePanel {
  position: fixed;
  top: 0;
  right: 0;
  width: 80vw;
  min-height: 100vh;
  background-color: white;
  border-left: 1px solid #ccc;
}
</style>
