<template>
  <div
    :class="[
      $style.baseStack,
      {
        [$style.horizontal]: horizontal,
        [$style.vertical]: vertical,
      },
    ]"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    vertical: {
      type: Boolean,
      defalt: false,
    },
    horizontal: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style module>
.baseStack {
  display: flex;
  &.horizontal {
    flex-direction: row;
  }

  &.vertical {
    flex-direction: column;
  }
}
</style>
