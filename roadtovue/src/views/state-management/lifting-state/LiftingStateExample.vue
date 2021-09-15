<template>
  <div>
    <BaseContentHeading tag="h2">Lifting State Up</BaseContentHeading>
    <BaseCard>
      <BaseCardTitle>Business Card Editor</BaseCardTitle>
      <BaseCardContent>
        This example shows how to lift state up to the least common ancestor.
        Both BusinessCardForm and BusinessCardPreview components need access to
        the same state. For that reason, it is lifted up to the parent component
        - BusinessCardEditor.
      </BaseCardContent>
      <BaseCardActions>
        <BaseButton @click.prevent="open">Open editor</BaseButton>
      </BaseCardActions>
    </BaseCard>

    <PanelModal :class="$style.panel" :open="isPanelOpen" @close="close">
      <BusinessCardEditor class="m-4" />
    </PanelModal>
  </div>
</template>

<script>
import { useToggleState } from '@/composables'
import PanelModal from '@/components/common/PanelModal'
import BusinessCardEditor from './BusinessCardEditor'
export default {
  components: {
    BusinessCardEditor,
    PanelModal,
  },
  setup() {
    const { state: isPanelOpen, open, close } = useToggleState(false)

    return {
      isPanelOpen,
      open,
      close,
    }
  },
}
</script>

<style module>
.panel {
  width: 90vw;
}
</style>
