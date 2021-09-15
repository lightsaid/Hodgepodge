<template>
  <BaseCard class="mb-4">
    <BaseCardTitle>useApi example</BaseCardTitle>
    <BaseCardContent>
      <!-- Idle -->
      <div v-if="fetchDogStatusIdle">
        Press the button to fetch a nice dog.
      </div>
      <!-- Pending -->
      <BaseLazyLoad :show="fetchDogStatusPending">
        <BaseIcon icon="spinner" spin />
      </BaseLazyLoad>
      <!-- Error -->
      <div v-if="fetchDogStatusError">
        <BaseStack vertical>
          <p class="mb-4">There was a problem while fetching a dog.</p>
          <div>
            <BaseButton variant="primary-outline" @click.prevent="fetchData"
              >Try again</BaseButton
            >
          </div>
        </BaseStack>
      </div>
      <!-- Success -->
      <div v-if="fetchDogStatusSuccess">
        <img v-if="dog" :class="$style.animalImage" :src="dog" alt="dog" />
        <p v-else>Hey, you did not fetch any nice pictures!</p>
      </div>
    </BaseCardContent>
    <BaseCardActions>
      <BaseButton class="mb-4" @click.prevent="fetchData">Fetch dog</BaseButton>
      <ApiStatusButtonActions :status="status" @change-status="setStatus" />
    </BaseCardActions>
  </BaseCard>
</template>

<script>
import { useApi } from '@/api/composables/useApi'
import { fetchDog, fetchKitty } from '@/api/animalApi'
import ApiStatusButtonActions from './components/ApiStatusButtonActions'
export default {
  name: 'UseApiExample',
  components: {
    ApiStatusButtonActions,
  },
  setup() {
    const {
      data: dog,
      status,
      setStatus,
      exec: fetchData,
      fetchDogStatusIdle,
      fetchDogStatusPending,
      fetchDogStatusSuccess,
      fetchDogStatusError,
    } = useApi('fetchDog', fetchDog, {
      responseAdapter: response => response.data.message,
    })

    return {
      dog,
      status,
      setStatus,
      fetchDogStatusIdle,
      fetchDogStatusPending,
      fetchDogStatusSuccess,
      fetchDogStatusError,
      fetchData,
    }
  },
}
</script>

<style module>
.animalImage {
  @apply h-64 w-full object-contain;
}
</style>
