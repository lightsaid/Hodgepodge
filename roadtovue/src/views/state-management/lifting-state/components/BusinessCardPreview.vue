<template>
  <div>
    <div class="shadow-md p-8">
      <h2 class="text-2xl font-semibold mb-8">Business Card Preview</h2>
      <div class="flex">
        <div
          v-if="avatar"
          class="w-32 h-32 rounded-full bg-gray-100 mr-6 flex-shrink-0 overflow-hidden"
        >
          <img :src="avatar" alt="Avatar" />
        </div>
        <div class="flex flex-col flex-grow">
          <p class="font-semibold text-2xl mb-3">{{ name }}</p>
          <p class="text-gray-700 mb-4">{{ description }}</p>
          <div class="flex justify-between mt-auto">
            <p class="text-gray-500">{{ address }}</p>
            <p class="text-gray-500">{{ phoneNumber }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: String,
    name: String,
    phoneNumber: String,
    description: String,
    address: String,
  },
}
</script>

<style module></style>
