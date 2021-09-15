<template>
  <div>
    <BaseContentHeading tag="h2">Testing</BaseContentHeading>
    <div class="space-y-4">
      <UnitTestAccordion />
      <EndToEndTestForm />
      <BaseCard>
        <BaseCardTitle>
          Testing tips
        </BaseCardTitle>
        <BaseCardContent>
          <ul class="list-inside space-y-3">
            <li v-for="(text, index) of testingPractices" :key="index">
              {{ index + 1 }}.
              <p class="inline leading-relaxed">{{ text }}</p>
            </li>
          </ul>
        </BaseCardContent>
      </BaseCard>
    </div>
  </div>
</template>

<script>
import { testingPractices } from './testingPractices'
import UnitTestAccordion from './components/UnitTestAccordion'
import EndToEndTestForm from './components/EndToEndTestForm'
export default {
  components: {
    UnitTestAccordion,
    EndToEndTestForm,
  },
  setup() {
    return {
      testingPractices,
    }
  },
}
</script>

<style module></style>
