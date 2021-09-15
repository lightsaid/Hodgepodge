<template>
  <BaseCard class="mb-4">
    <BaseCardTitle>Fetch Dog API states</BaseCardTitle>

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
      <ApiStatusButtonActions
        :status="fetchDogStatus"
        @change-status="fetchDogStatus = $event"
      />
    </BaseCardActions>
  </BaseCard>
</template>

<script>
import { fetchDog } from '@/api/animalApi'
import { apiStatus, apiStatusComputedFactory } from '@/api'
import { upperFirst } from 'lodash-es'
import ApiStatusButtonActions from './components/ApiStatusButtonActions'

const { IDLE, SUCCESS, PENDING, ERROR } = apiStatus

export default {
  name: 'ApiStatusHandling',
  components: {
    ApiStatusButtonActions,
  },
  data() {
    return {
      dog: null,
      fetchDogStatus: IDLE,
    }
  },
  computed: {
    ...apiStatusComputedFactory(['fetchDogStatus', 'updateDogStatus']),
  },
  methods: {
    async fetchData() {
      try {
        this.fetchDogStatus = PENDING
        const response = await fetchDog()
        this.dog = response.data.message
        this.fetchDogStatus = SUCCESS
      } catch (error) {
        console.error(error)
        this.fetchDogStatus = ERROR
      }
    },
    setFetchDogStatus(status) {
      this.fetchDogStatus = status
    },
  },
  created() {
    this.apiStatus = apiStatus
  },
}
</script>

<style module>
.idleButton {
  @apply bg-indigo-100 text-indigo-700 border border-indigo-700;

  &:hover {
    @apply text-indigo-800 bg-indigo-100;
  }
}

.pendingButton {
  @apply bg-teal-100 text-teal-700 border border-teal-700;
  &:hover {
    @apply text-teal-800 bg-teal-200;
  }
}

.successButton {
  @apply bg-green-600 text-green-100;

  &:hover {
    @apply bg-green-700;
  }
}

.errorButton {
  @apply bg-red-700;
  &:hover {
    @apply bg-red-800;
  }
}

.animalImage {
  @apply h-64 w-full object-contain;
}
</style>
