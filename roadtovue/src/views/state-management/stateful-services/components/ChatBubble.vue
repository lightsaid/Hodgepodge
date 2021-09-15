<template>
  <div class="fixed bottom-5 right-5 mr-4 mb-4">
    <div
      v-if="user"
      class="w-16 h-16 bg-indigo-700 rounded-full flex items-center justify-center relative"
    >
      <span class="text-4xl text-indigo-100 h-12">+</span>
      <div
        class="absolute w-64 bg-white p-4 shadow-md rounded-lg transform -translate-x-24 -translate-y-20"
      >
        <span> Hello {{ user.name }}. Let's chat!</span>
      </div>
    </div>
  </div>
</template>

<script>
import { userComputed } from '@/services/stateful/userService'

export default {
  computed: {
    ...userComputed,
  },
}
</script>

<style module></style>
