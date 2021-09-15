<template>
  <div>
    <nav :class="[$style.sideMenu, { [$style.sideMenuOpen]: isMobileNavOpen }]">
      <div :class="$style.menuHeaderContainer">
        <BaseHeading :headingClass="$style.menuHeader"
          >Select example</BaseHeading
        >
        <div class="md:hidden">
          <BaseIcon
            @click.prevent="hideSideMenu"
            tag="a"
            href="#"
            :class="$style.closeMenuIcon"
            size="lg"
            icon="times"
          />
        </div>
      </div>

      <div class="">
        <MenuItem
          v-for="({ title, sections, to, header }, chapterIndex) in menuConfig"
          :key="chapterIndex"
          :label="title"
          :children="sections"
          :to="to"
          :header="header"
        />
      </div>
    </nav>
    <Backdrop :show="isMobileNavOpen" :class="$style.backdropComponent" />
  </div>
</template>

<script>
import MenuItem from './MenuItem'
import {
  selectExamplePath,
  isMobileNavOpenComputed,
  hideSideMenu,
} from './services/menuService'
import { SIDE_MENU_CONFIG } from '@/config'
import Backdrop from '@/components/common/Backdrop'
export default {
  components: {
    MenuItem,
    Backdrop,
  },
  watch: {
    $route($route) {
      selectExamplePath($route.fullPath)
      hideSideMenu()
    },
  },
  computed: {
    ...isMobileNavOpenComputed,
  },
  methods: {
    hideSideMenu,
  },
  created() {
    this.menuConfig = SIDE_MENU_CONFIG
  },
}
</script>

<style module>
.menuHeader {
  margin: 0;
}

.sideMenu {
  @media screen and (max-width: 768px) {
    left: -90vw;
    width: 90vw;
    transition: 0.5s transform;
    @apply absolute top-0 h-full bg-white shadow-md border z-50 p-5;

    &.sideMenuOpen {
      transform: translateX(90vw);
    }
  }
}

.menuHeaderContainer {
  @apply mb-4 pb-4 border-b flex justify-between items-center;

  @screen md {
    @apply pb-2 block;
  }
}

.closeMenuIcon {
  @apply cursor-pointer text-blue-900;

  &:hover {
    @apply text-blue-700;
  }

  @screen md {
    @apply hidden;
  }
}

.backdropComponent {
  @screen md {
    @apply hidden;
  }
}
</style>
