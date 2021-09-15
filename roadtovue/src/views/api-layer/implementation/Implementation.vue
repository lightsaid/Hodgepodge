<template>
  <div>
    <BaseContentHeading>API Layer Implementation Example</BaseContentHeading>
    <BaseCard class="mb-4">
      <BaseCardTitle>Calling API methods from animalApi</BaseCardTitle>

      <BaseCardContent>
        <!-- Display images of animals -->
        <BaseStack>
          <div :class="$style.animalImageContainer">
            <img v-if="cat" :class="$style.animalImage" :src="cat" alt="cat" />
          </div>
          <div :class="$style.animalImageContainer">
            <img v-if="dog" :class="$style.animalImage" :src="dog" alt="dog" />
          </div>
        </BaseStack>
      </BaseCardContent>
      <BaseCardActions>
        <BaseButton @click.prevent="fetchAnimals">Fetch animals</BaseButton>
      </BaseCardActions>
    </BaseCard>
  </div>
</template>

<script>
import { fetchDog, fetchKitty } from '@/api/animalApi'
export default {
  name: 'ApiImplementation',
  data() {
    return {
      dog: null,
      cat: null,
    }
  },
  methods: {
    /**
     * Fetch and set dog image
     */
    async fetchDog() {
      const response = await fetchDog()
      this.dog = response.data.message
    },
    /**
     * Fetch and set cat image
     */
    async fetchKitty() {
      const response = await fetchKitty()
      this.cat = response.data?.[0].url
    },
    fetchAnimals() {
      this.fetchDog()
      this.fetchKitty()
    },
  },
  created() {
    this.fetchAnimals()
  },
}
</script>

<style module>
.animalImageContainer {
  @apply w-1/2;
}
.animalImage {
  @apply h-64 w-full object-cover;
}
</style>
