<template>
  <div>
    <BaseCard class="mb-4">
      <BaseCardTitle>Dynamic layout</BaseCardTitle>
      <BaseCardContent>
        Different layouts can be selected at runtime.
      </BaseCardContent>
      <BaseCardActions>
        <BaseButton @click.prevent="open">Test layout</BaseButton>
      </BaseCardActions>
    </BaseCard>
    <PanelModal @close="close" :class="$style.panel" :open="isPanelOpen">
      <div class="p-8">
        <h2 class="font-semibold mb-4 text-2xl text-center">Choose layout</h2>

        <!-- Layout controls -->
        <div class="flex justify-center space-x-6 mb-8">
          <BaseButton
            variant="primary-outline"
            @click.prevent="setLayout(LAYOUTS.standard)"
            >Standard</BaseButton
          >
          <BaseButton
            variant="primary-outline"
            @click.prevent="setLayout(LAYOUTS.standardReverse)"
            >Standard Reverse</BaseButton
          >
          <BaseButton
            variant="primary-outline"
            @click.prevent="setLayout(LAYOUTS.auth)"
            >Auth</BaseButton
          >
        </div>

        <div class="text-center mb-8">
          <p>Current layout: {{ layout }}</p>
        </div>

        <!-- Layout example -->
        <DynamicLayout class="mb-8">
          <template #header>
            <p>Header</p>
          </template>
          <template #content>
            <p>Content</p>
          </template>
          <template #aside>
            <p>Aside</p>
          </template>
          <template #footer>
            <p>Footer</p>
          </template>
        </DynamicLayout>
        <div class="flex items-center justify-center">
          <BaseButton @click.prevent="close">Close modal</BaseButton>
        </div>
      </div>
    </PanelModal>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useToggleState } from '@/composables'
import PanelModal from '@/components/common/PanelModal'
import DynamicLayout from '../layout/DynamicLayout'
import { useLayout } from '../composables/useLayout'

export default {
  name: 'DynamicLayoutExample',
  components: {
    PanelModal,
    DynamicLayout,
  },
  setup() {
    // Toggle state for the PanelModal component

    const { state: isPanelOpen, open, close } = useToggleState(false)
    // Layout composable for dynamic layout example
    const { layout, setLayout, LAYOUTS } = useLayout()
    return {
      isPanelOpen,
      open,
      close,
      layout,
      setLayout,
      LAYOUTS,
    }
  },
}
</script>

<style module>
.panel {
  width: 90vw;
}
</style>
