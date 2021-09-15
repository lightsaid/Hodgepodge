<template>
  <router-view v-slot="{ Component }">
    <transition name="slide-fade" appear mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.25s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
}
</style>
<style module></style>
