<template>
  <div :class="$style.container">
    <BaseContentHeading tag="h2"
      >Composables and State Provider</BaseContentHeading
    >
    <div class="space-y-4">
      <GlobalSpinnerExample />
      <ComposablesExample />
    </div>
  </div>
</template>

<script>
import GlobalSpinnerExample from './components/GlobalSpinnerExample'
import ComposablesExample from './components/ComposablesExample'
export default {
  components: {
    GlobalSpinnerExample,
    ComposablesExample,
  },
}
</script>

<style module>
.container {
  min-height: 800px;
}
</style>
