<template>
  <div class="p-8 bg-red-300 h-screen flex items-center justify-center ">
    <div class="flex items-center flex-col">
      <p class="text-red-800 font-bold text-center mb-4">
        Oops, there was an unexpected error. <br />Try refreshing your browser
        and ensure you have internet connection.
      </p>
      <BaseButton class="mb-4" @click.prevent="$emit('close-panel')"
        >Close panel</BaseButton
      >
      <BaseButton @click.prevent="$emit('retry')">Try again</BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['close-panel', 'retry'],
}
</script>

<style module></style>
