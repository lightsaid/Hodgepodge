<template>
  <FadeTransition appear>
    <div v-if="show">
      <div :class="$style.backdrop"></div>
    </div>
  </FadeTransition>
</template>

<script>
import FadeTransition from '@/components/transitions/FadeTransition'
export default {
  components: {
    FadeTransition,
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style module>
.backdrop {
  transition: all 5s;
  @apply w-full h-full absolute inset-0 bg-blue-900 z-10 opacity-50;

  @screen md {
    @apply hidden;
  }
}
</style>
