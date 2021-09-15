<template>
  <div>
    <BaseContentHeading>
      Base components
    </BaseContentHeading>
    <BaseCard>
      <BaseCardTitle>Automatically imported and registered</BaseCardTitle>
      <BaseCardContent>
        <p class="mb-4">
          The heading above, this card, and the button below are Base
          components. All are automatically imported and registered.
        </p>
        See
        <span class="font-semibold">helpers/registerBaseComponents.js</span>
        file.
      </BaseCardContent>
      <BaseCardActions>
        <BaseButton @click.prevent="onClick">Base button</BaseButton>
      </BaseCardActions>
    </BaseCard>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification'
const toast = useToast()
export default {
  methods: {
    onClick() {
      toast.success('I was clicked!')
    },
  },
}
</script>

<style module></style>
