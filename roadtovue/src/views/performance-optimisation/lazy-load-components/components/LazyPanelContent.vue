<template>
  <div class="p-8 flex items-center h-screen justify-center flex-col">
    <h2 class="text-2xl font-semibold mb-4">Welcome to the side panel modal</h2>
    <p class="mb-4">I was successfully lazy loaded!</p>
    <BaseButton @click.prevent="$emit('close-panel')">Close panel</BaseButton>
  </div>
</template>

<script>
export default {
  emits: ['close-panel'],
}
</script>

<style module></style>
