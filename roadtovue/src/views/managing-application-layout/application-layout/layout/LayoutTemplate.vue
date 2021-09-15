<!--
  Reusable layout template component
-->

<template>
  <component :is="currentLayoutComponent">
    <template
      v-for="slotName in Object.keys($slots)"
      :key="slotName"
      v-slot:[slotName]="slotProps"
    >
      <slot :name="slotName" :layout="layout" v-bind="slotProps" />
    </template>
  </component>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    useLayout: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const { layout, currentLayoutComponent } = props.useLayout()

    return {
      layout,
      currentLayoutComponent,
    }
  },
}
</script>

<style module></style>
