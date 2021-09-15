<template>
  <div>
    <p v-if="fetchDogStatusIdle">Welcome</p>
    <p v-if="fetchDogStatusPending">Loading data</p>
    <p v-if="fetchDogStatusError">There was a problem.</p>
    <div v-if="fetchDogStatusSuccess">
      <img :src="dog" alt="Dog image" />
    </div>
  </div>
</template>

<script>
import { fetchDog } from '@/api/animalApi'
import { apiStatus, apiStatusComputedFactory } from '@/api'
import { withAsync } from '@/helpers'
const { IDLE, PENDING, SUCCESS, ERROR } = apiStatus

export default {
  data() {
    return {
      fetchDogStatus: IDLE,
      dog: null,
    }
  },
  computed: {
    ...apiStatusComputedFactory('fetchDogStatus'),
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
