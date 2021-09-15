<template>
  <div>
    <BaseContentHeading>Styling Child Components</BaseContentHeading>
    <BaseCard class="mb-4">
      <BaseCardTitle>Scoped styled child</BaseCardTitle>
      <BaseCardContent>
        <ScopedStyledChild />
      </BaseCardContent>
    </BaseCard>
    <BaseCard class="mb-4">
      <BaseCardTitle>Module styled child</BaseCardTitle>
      <BaseCardContent>
        <ModuleStyledChild :childClass="$style.moduleStyledChild" />
      </BaseCardContent>
    </BaseCard>
  </div>
</template>

<script>
import ScopedStyledChild from './components/ScopedStyledChild'
import ModuleStyledChild from './components/ModuleStyledChild'

export default {
  components: {
    ScopedStyledChild,
    ModuleStyledChild,
  },
}
</script>

<style scoped>
::v-deep(.scoped-style-content) {
  font-weight: 600;
  color: theme('colors.red.700');
}
</style>

<style module>
.moduleStyledChild {
  font-style: italic;
  font-weight: 600;
  color: theme('colors.teal.700');
}
</style>
