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
      fetchDogStatus: 'IDLE',
      dog: null,
    }
  },
  methods: {
    async fetchDog() {
      try {
        // Show loader
        this.fetchDogStatus = 'PENDING'
        const response = await fetchDog()
        this.dog = response.data.message
        // Show data
        this.fetchDogStatus = 'SUCCESS'
      } catch (error) {
        // Show error
        this.fetchDogStatus = 'ERROR'
      }
    },
  },
  created() {
    this.fetchDog()
  },
}
</script>

<style module></style>
