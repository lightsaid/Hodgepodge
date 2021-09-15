<template>
  <div>
    <div :class="childClass">
      I am styled via module style!
    </div>
  </div>
</template>

<script>
export default {
  props: {
    childClass: String,
  },
}
</script>

<style module></style>
