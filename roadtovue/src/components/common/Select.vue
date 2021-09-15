<!-- This os a Vue 2 example -->

<template>
  <div>
    <!-- Pass on data -->
    <v-select v-bind="$attrs">
      <template
        v-for="slotName in Object.keys($slots)"
        :key="slotName"
        v-slot:[slotName]="slotProps"
      >
        <slot :name="slotName" v-bind="slotProps" />
      </template>
    </v-select>
    <div>
      <slot name="caption">
        <span v-if="caption">{{ caption }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    clearOnSelect: {
      type: Boolean,
      default: false,
    },
    caption: String,
  },
}
</script>
<style module></style>
