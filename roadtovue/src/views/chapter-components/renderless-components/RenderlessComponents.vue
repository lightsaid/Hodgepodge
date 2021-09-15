<template>
  <div>
    <BaseContentHeading>Renderless Components</BaseContentHeading>
    <BaseCard class="mb-4">
      <BaseCardTitle>Toggle Provider</BaseCardTitle>

      <BaseCardContent>
        <p class="mb-1">
          ToggleProvider component can be used for a variety of scenarios that
          involve switching between on and off states.
        </p>
        <p>
          Here is a simple scenario with conditionally showing the alert
          component.
        </p>
      </BaseCardContent>
      <BaseCardContent>
        <ToggleExample />
      </BaseCardContent>
      <!-- <hr class="mb-4" /> -->
    </BaseCard>
    <BaseCard>
      <BaseCardTitle>Tags Provider</BaseCardTitle>
      <BaseCardContent>
        <p>
          This example shows an input field that was enhanced with the
          TagsProvider. It only provides business logic to add and remove tags,
          whilst the markup is provided by the parent component.
        </p>
      </BaseCardContent>
      <BaseCardContent>
        <TagsExample />
      </BaseCardContent>
    </BaseCard>
  </div>
</template>

<script>
import TagsExample from './components/TagsExample'
import ToggleExample from './components/ToggleExample'
export default {
  name: 'RenderlessComponents',
  components: {
    TagsExample,
    ToggleExample,
  },
}
</script>

<style module></style>
