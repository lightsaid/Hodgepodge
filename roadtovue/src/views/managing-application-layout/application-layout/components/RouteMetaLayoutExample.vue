<template>
  <div>
    <BaseCard class="mb-4">
      <BaseCardTitle>Route-meta based layout</BaseCardTitle>
      <BaseCardContent>
        Different layout can be displayed based on the meta options in the route
        config.
      </BaseCardContent>
      <BaseCardActions>
        <BaseButton @click.prevent="open">Test layout</BaseButton>
      </BaseCardActions>
    </BaseCard>
    <!-- Route meta based layout -->
    <PanelModal :class="$style.panel" :open="isPanelOpen" @close="close">
      <div class="p-8">
        <h2 class="font-semibold mb-4 text-2xl text-center">
          Choose meta-based layout
        </h2>
        <!-- Layout controls -->
        <div class="flex justify-center space-x-6 mb-8">
          <BaseButton
            variant="primary-outline"
            tag="router-link"
            to="/managing-application-layout/layout-standard"
            >Standard</BaseButton
          >
          <BaseButton
            variant="primary-outline"
            tag="router-link"
            to="/managing-application-layout/layout-standard-reverse"
            >Standard Reverse</BaseButton
          >
          <BaseButton
            variant="primary-outline"
            tag="router-link"
            to="/managing-application-layout/layout-auth"
            >Auth</BaseButton
          >
        </div>

        <!-- Layoute xample -->
        <RouteMetaLayout class="mb-8">
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
        </RouteMetaLayout>
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
import RouteMetaLayout from '../layout/RouteMetaLayout'

export default {
  name: 'RouteMetaLayoutExample',
  components: {
    PanelModal,
    RouteMetaLayout,
  },
  setup() {
    // Toggle state for the PanelModal component
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
