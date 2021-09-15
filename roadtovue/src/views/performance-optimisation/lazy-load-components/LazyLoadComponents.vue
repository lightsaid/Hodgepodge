<template>
  <div>
    <BaseContentHeading>Lazy-load Components</BaseContentHeading>
    <BaseCard class="mb-4">
      <BaseCardTitle>Lazy Load component</BaseCardTitle>
      <BaseCardContent>
        <p>
          Click "Open modal" button to open a panel that has a dynamically
          loaded component. If you open the panel again, then there will be no
          loader, as the component is already loaded. Refresh the browser to see
          it again.
        </p>
      </BaseCardContent>
      <BaseCardActions>
        <BaseButton @click.prevent="onPanelOpen($options.PANEL_TYPES.normal)"
          >Open panel</BaseButton
        >
      </BaseCardActions>
    </BaseCard>

    <PanelModal
      :open="isPanelOpen"
      @close="onPanelClose($options.PANEL_TYPES.normal)"
    >
      <!-- Lazy loaded when loadPanelContent is set to true -->
      <div>
        <LazyPanelContent
          v-if="loadPanelContent"
          @close-panel="onPanelClose($options.PANEL_TYPES.normal)"
        />
      </div>
    </PanelModal>

    <BaseCard class="mb-4">
      <BaseCardTitle>Lazy load component error</BaseCardTitle>
      <BaseCardContent>
        <p>
          Click "Open modal with error" button to open a panel with a dynamic
          component that failed to load.
        </p>
      </BaseCardContent>
      <BaseCardActions>
        <BaseButton @click.prevent="onPanelOpen($options.PANEL_TYPES.withError)"
          >Open panel with error</BaseButton
        >
      </BaseCardActions>
    </BaseCard>

    <PanelModal
      :open="isPanelWithErrorOpen"
      @close="onPanelClose($options.PANEL_TYPES.withError)"
    >
      <div>
        <LazyPanelContentWithError
          v-if="loadPanelContentWithError"
          @close-panel="onPanelClose($options.PANEL_TYPES.withError)"
          @retry="onRetry"
        />
      </div>
    </PanelModal>

    <BaseCard class="mb-4">
      <BaseCardTitle>Lazy load with an IntersectionObserver</BaseCardTitle>
      <BaseCardContent>
        Open the modal and scroll to the bottom to lazily load a component with
        IntersectionObserver
      </BaseCardContent>
      <BaseCardActions>
        <BaseButton
          @click.prevent="onPanelOpen($options.PANEL_TYPES.lazyLoadIntersect)"
        >
          Open panel with intersection observer
        </BaseButton>
      </BaseCardActions>
    </BaseCard>

    <PanelModal
      :open="isPanelWithIntersectOpen"
      @close="onPanelClose($options.PANEL_TYPES.lazyLoadIntersect)"
    >
      <div>
        <LazyPanelContentIntersect
          @close-panel="onPanelClose($options.PANEL_TYPES.lazyLoadIntersect)"
        />
      </div>
    </PanelModal>

    <BaseCard>
      <BaseCardTitle>Lazy load with a custom LazyLoad component</BaseCardTitle>
      <BaseCardContent>
        Open the modal and scroll to the bottom to lazily load a component
      </BaseCardContent>
      <BaseCardActions>
        <BaseButton
          @click.prevent="
            onPanelOpen($options.PANEL_TYPES.lazyLoadCustomLazyLoad)
          "
        >
          Open panel with custom LazyLoad
        </BaseButton>
      </BaseCardActions>
    </BaseCard>

    <PanelModal
      :open="isPanelWithCustomLazyLoadOpen"
      @close="onPanelClose($options.PANEL_TYPES.lazyLoadCustomLazyLoad)"
    >
      <div>
        <LazyPanelContentWithCustomLazyLoad
          @close-panel="
            onPanelClose($options.PANEL_TYPES.lazyLoadCustomLazyLoad)
          "
        />
      </div>
    </PanelModal>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import PanelModal from '@/components/common/PanelModal'
import Loader from './components/Loader'
import ErrorComponent from './components/ErrorComponent'
import LazyPanelContentIntersect from './components/lazy-with-intersection-observer/LazyPanelContentIntersect'
import LazyPanelContentWithCustomLazyLoad from './components/lazy-with-intersection-observer/LazyPanelContentWithCustomLazyLoad'

const ModalContentLoader = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('./components/LazyPanelContent'))
    }, 2000)
  })

const ModalContentWithErrorLoader = (loadComponent = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (loadComponent) {
        resolve(import('./components/LazyPanelContent'))
        return
      }
      reject('Could not fetch the component')
    }, 2000)
  })

const PANEL_TYPES = {
  normal: Symbol('normal'),
  withError: Symbol('withError'),
  lazyLoadIntersect: Symbol('lazyLoadIntersect'),
  lazyLoadCustomLazyLoad: Symbol('lazyLoadCustomLazyLoad'),
}

const LazyPanelContent = defineAsyncComponent({
  loader: ModalContentLoader,
  loadingComponent: Loader,
  errorComponent: ErrorComponent,
  delay: 500,
  timeout: 15000,
})

const lazyPanelContenWithErrorFactory = () =>
  defineAsyncComponent({
    loader: ModalContentWithErrorLoader,
    loadingComponent: Loader,
    errorComponent: ErrorComponent,
    delay: 500,
    // timeout: 5000,
    onError(error, retry, fail, attempts) {
      console.log('On dynamic load error', { error, retry, fail, attempts })
      if (error.message.match(/fetch/) && attempts <= 2) {
        retry()
      } else {
        fail()
      }
    },
  })

let LazyPanelContentWithError = lazyPanelContenWithErrorFactory()

export default {
  components: {
    PanelModal,
    LazyPanelContent,
    LazyPanelContentWithError,
    LazyPanelContentIntersect,
    LazyPanelContentWithCustomLazyLoad,
  },
  data() {
    return {
      isPanelOpen: false,
      isPanelWithErrorOpen: false,
      isPanelWithIntersectOpen: false,
      isPanelWithCustomLazyLoadOpen: false,
      loadPanelContent: false,
      loadPanelContentWithError: false,
    }
  },
  methods: {
    async onRetry() {
      this.loadPanelContentWithError = false
      await this.$nextTick()
      this.loadPanelContentWithError = true
    },
    onPanelClose(panelType) {
      switch (panelType) {
        case PANEL_TYPES.normal:
          this.isPanelOpen = false
          break
        case PANEL_TYPES.withError:
          this.isPanelWithErrorOpen = false
          break
        case PANEL_TYPES.lazyLoadIntersect:
          this.isPanelWithIntersectOpen = false
          break
        case PANEL_TYPES.lazyLoadCustomLazyLoad:
          this.isPanelWithCustomLazyLoadOpen = false
          break
      }
    },
    onPanelOpen(panelType) {
      switch (panelType) {
        case PANEL_TYPES.normal:
          this.isPanelOpen = true
          this.loadPanelContent = true
          break
        case PANEL_TYPES.withError:
          this.isPanelWithErrorOpen = true
          this.loadPanelContentWithError = true
          break
        case PANEL_TYPES.lazyLoadIntersect:
          this.isPanelWithIntersectOpen = true
          break
        case PANEL_TYPES.lazyLoadCustomLazyLoad:
          this.isPanelWithCustomLazyLoadOpen = true
          break
      }
    },
  },
  created() {
    this.$options.PANEL_TYPES = PANEL_TYPES
  },
}
</script>

<style module></style>
