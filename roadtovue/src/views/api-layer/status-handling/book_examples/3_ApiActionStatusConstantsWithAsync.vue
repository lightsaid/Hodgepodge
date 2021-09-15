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
import { apiStatus } from '@/api'
import { withAsync } from '@/helpers'
const { IDLE, PENDING, SUCCESS, ERROR } = apiStatus

export default {
  data() {
    return {
      fetchDogStatus: IDLE,
      dog: null,
    }
  },
  methods: {
    async fetchDog() {
      this.fetchDogStatus = PENDING
      const { response, error } = await withAsync(fetchDog)
      if (error) {
        this.fetchDogStatus = ERROR
        return
      }
      this.dog = response.data.message
      this.fetchDogStatus = SUCCESS
    },
  },
  created() {
    this.fetchDog()
  },
}
</script>

<style module></style>
