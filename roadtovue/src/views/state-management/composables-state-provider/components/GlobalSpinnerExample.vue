<template>
  <BaseCard>
    <BaseCardTitle>State provider</BaseCardTitle>
    <BaseCardContent>
      <p>
        The {{'<GlobalSpinnerProvider />'}} component is used in the App.vue
        component. Thanks to that, the useGlobalSpinner method can be imported
        and used anywhere in the application.
      </p>
    </BaseCardContent>
    <BaseCardActions>
      <BaseButton @click.prevent="showSpinner">Show global spinner</BaseButton>
    </BaseCardActions>
  </BaseCard>
</template>

<script>
import { useGlobalSpinner } from '@/components/common/spinner/GlobalSpinnerProvider'

export default {
  setup() {
    const {
      isGlobalSpinnerVisible,
      setGlobalSpinnerOn,
      setGlobalSpinnerOff,
    } = useGlobalSpinner()

    const showSpinner = () => {
      setGlobalSpinnerOn()
      setTimeout(() => {
        setGlobalSpinnerOff()
      }, 2000)
    }

    return {
      isGlobalSpinnerVisible,
      showSpinner,
    }
  },
}
</script>

<style module></style>
