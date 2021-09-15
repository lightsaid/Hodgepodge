<template>
  <div :class="$style.defaultLayout">
    <PageIntro :class="$style.pageIntro" />
    <div class="container" :class="$style.contentContainer">
      <SideMenu :class="$style.sideMenuComponent" />
      <main :class="$style.mainContent">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import PageIntro from '@/components/common/PageIntro'
import SideMenu from './components/side-menu/SideMenu'

export default {
  components: {
    PageIntro,
    SideMenu,
  },
}
</script>

<style module>
.defaultLayout {
  @apply min-h-screen mx-auto w-full pb-4  bg-gray-100;
  @screen md {
    @apply pb-10;
  }
}

.contentContainer {
  @apply w-full mx-auto;

  @screen md {
    @apply grid grid-cols-7 gap-3;
  }
}

.sideMenuComponent {
  @screen md {
    @apply col-span-2;
  }
}

.mainContent {
  @screen md {
    @apply pl-8 col-span-5;
  }
}
</style>
