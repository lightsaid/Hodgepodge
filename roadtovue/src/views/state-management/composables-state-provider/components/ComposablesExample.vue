<template>
  <BaseCard>
    <BaseCardTitle
      >useScrollPosition and useWindowSize composables</BaseCardTitle
    >
    <BaseCardContent class="space-y-4">
      <div>
        <h3 class="text-xl mb-2">Window size</h3>

        <div> <span>Width:</span> {{ windowSize.width }} </div>
        <div> <span>Height: </span> {{ windowSize.height }} </div>
      </div>
      <div>
        <h3 class="text-xl mb-2">Scroll position</h3>

        <div> Scroll position: {{ scrollY }} </div>
      </div>
    </BaseCardContent>
  </BaseCard>
</template>

<script>
import { useWindowSize, useScrollPosition } from '@/composables'

export default {
  setup() {
    const { windowSize, cleanup: windowSizeCleanup } = useWindowSize()
    const { scrollY, cleanup: scrollCleanup } = useScrollPosition()

    return {
      windowSize,
      scrollY,
    }
  },
}
</script>

<style module></style>
