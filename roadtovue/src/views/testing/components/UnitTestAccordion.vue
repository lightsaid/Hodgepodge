<template>
  <BaseCard>
    <BaseCardTitle>Unit test component example</BaseCardTitle>
    <BaseCardContent>
      <!-- Tests are in the src/components/common/accordion directory -->
      <Accordion :items="accordionData" />
    </BaseCardContent>
  </BaseCard>
</template>

<script>
import Accordion from '@/components/common/accordion/Accordion'
import { accordionData } from '@/fixtures/accordionData'

export default {
  components: {
    Accordion,
  },
  setup() {
    return {
      accordionData,
    }
  },
}
</script>

<style module></style>
