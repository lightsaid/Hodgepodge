<template>
  <div>
    <component
      :is="menuItemComponent"
      :class="[
        $style.menuItemLink,
        header ? $style.menuItemHeader : $style.menuItemLinkSection,
      ]"
      :active-class="$style.routerLinkActive"
      v-bind="menuItemComponentProps"
      v-on="menuItemComponentListeners"
    >
      <div
        class="flex justify-between items-center"
        :class="[showChildrenItems && children && 'mb-2', !children && 'px-4']"
      >
        <span :class="$style.menuItemText">
          {{ label }}
        </span>
        <div
          v-if="children"
          :class="[
            $style.menuItemChevronContainer,
            showChildrenItems && $style.menuItemOpen,
          ]"
        >
          <BaseIcon icon="chevron-right" :class="$style.menuItemChevron" />
        </div>
      </div>
    </component>

    <template v-if="Array.isArray(children)">
      <div :class="$style.menuSection" v-show="showChildrenItems">
        <MenuItem
          v-for="(menuItem, sectionIndex) in children"
          :key="`${menuItem.title}-${sectionIndex}`"
          :label="menuItem.title"
          :to="`${to}/${menuItem.to}`"
        />
      </div>
    </template>
  </div>
</template>

<script>
import {
  selectedExamplePathComputed,
  menuObserver,
} from './services/menuService'
const OPEN_MENU_SECTION = 'OPEN_MENU_SECTION'
export default {
  name: 'MenuItem',
  props: {
    label: {
      type: String,
      required: true,
    },
    children: {
      type: Array,
      required: false,
    },
    to: {
      type: [String, Object],
      required: false,
    },
    header: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const showChildrenItems = this.header
      ? this.doesChapterMatchRoutePath(window.location.pathname)
      : false
    return {
      showChildrenItems,
    }
  },
  beforeUnmount() {
    if (this.header && Array.isArray(this.children)) {
      menuObserver.off(OPEN_MENU_SECTION, this.onMenuSectionOpen)
    }
  },
  created() {
    if (this.header && Array.isArray(this.children)) {
      menuObserver.on(OPEN_MENU_SECTION, this.onMenuSectionOpen)
    }
  },
  computed: {
    ...selectedExamplePathComputed,
    menuItemComponent() {
      return this.header ? 'a' : 'router-link'
    },
    menuItemComponentProps() {
      return this.header
        ? { href: '#' }
        : {
            to: this.to,
          }
    },
    menuItemComponentListeners() {
      return this.header
        ? {
            click: this.toggleShowChildren,
          }
        : {}
    },
  },
  methods: {
    onMenuSectionOpen(path) {
      if (path !== this.to) this.showChildrenItems = false
    },
    doesChapterMatchRoutePath(path) {
      // Get the first part of the url which corresponds to the book chapter
      const [chapterPath] = path.slice(1).split('/')
      // If we have no chapter then
      if (!chapterPath) return false
      return chapterPath === this.to.slice(1)
    },

    toggleShowChildren(e) {
      e.preventDefault()
      const nextValue = !this.showChildrenItems
      this.showChildrenItems = nextValue
      // Notify subscribers about menu section opening
      if (nextValue) {
        menuObserver.notify(OPEN_MENU_SECTION, this.to)
        return
      }
    },
  },
}
</script>
<style module>
.menuItemChevron {
  color: theme('colors.gray.600');
}

.menuItemHeader {
  @screen md {
    &:hover {
      .menuItemChevron {
        color: theme('colors.blue.900');
      }
    }
  }
}

.menuItemLink {
  @apply py-2 text-lg cursor-pointer block;

  @screen md {
    &:hover {
      .menuItemChevron {
        opacity: 1;
      }
    }
  }
}

.menuItemLinkSection {
  @apply bg-gray-300;

  &:hover:not(.routerLinkActive) {
    @apply bg-gray-400;
  }
}

.routerLinkActive {
  @apply bg-blue-700;

  .menuItemText {
    @apply text-blue-100;
  }
}

.menuItemChevronContainer {
  transition: 0.25s transform;
  @apply h-6;
}

.menuItemOpen {
  transform: rotate(90deg);
}

.menuItemChevron {
  transition: 0.25s opacity;
  @apply text-gray-900 text-opacity-50;
}

.menuSection {
  @apply mb-2;
}
</style>
