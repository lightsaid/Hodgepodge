<template>
  <div>
    <p v-if="isLoading">Loading data</p>
    <p v-else-if="isError">There was a problem.</p>
    <div v-else>
      <img :src="dog" alt="Dog image" />
    </div>
  </div>
</template>

<script>
import { fetchDog } from '@/api/animalApi'
export default {
  data() {
    return {
      isLoading: false,
      isError: false,
      dog: null,
    }
  },
  methods: {
    async fetchDog() {
      try {
        // Reset isError
        this.isError = false
        // Show loader
        this.isLoading = true
        const response = await fetchDog()
        this.dog = response.data.message
      } catch (error) {
        // Show error
        this.isError = true
      } finally {
        // Hide loader
        this.isLoading = false
      }
    },
  },
  created() {
    this.fetchDog()
  },
}
</script>

<style module></style>
