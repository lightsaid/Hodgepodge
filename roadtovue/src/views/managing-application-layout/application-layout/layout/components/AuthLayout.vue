<template>
  <div class="container mx-auto" :class="$style.authLayout">
    <main :class="$style.content">
      <slot name="content" />
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style module>
.authLayout {
  display: grid;
  place-items: center;
  height: 600px;
  @apply bg-purple-300;
}
</style>
