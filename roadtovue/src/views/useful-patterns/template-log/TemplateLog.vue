<template>
  <div>
    <BaseContentHeading>Logging values in SFC template</BaseContentHeading>
    <BaseCard class="mb-4">
      <BaseCardTitle>BaseLog</BaseCardTitle>
      <BaseCardContent>
        <p class="mb-3">
          Open devtools and check the console!. You should see logs for options
          and selectedProductId values. Update the state to see them change.
        </p>
        <p>options: {{ options }}</p>
        <p>selectedProductId: {{ selectedProductId }}</p>
      </BaseCardContent>
    </BaseCard>

    <BaseLog
      :log="{
        options,
        selectedProductId: `Selected Product ID: ${selectedProductId}`,
      }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ['Hello', 'World'],
      selectedProductId: 52,
    }
  },
}
</script>

<style module></style>
