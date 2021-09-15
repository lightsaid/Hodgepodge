<template>
  <BaseHeading v-bind="$attrs" :class="$style.baseSectionHeading">
    <!-- Pass on all named slots -->

    <template
      v-for="slotName in Object.keys($slots)"
      :key="slotName"
      v-slot:[slotName]="slotProps"
    >
      <slot :name="slotName" v-bind="slotProps" />
    </template>
  </BaseHeading>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {},
}
</script>

<style module>
.baseSectionHeading {
  @apply text-lg font-heading;
}
</style>
