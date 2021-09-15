<template>
  <div :class="$style.pageIntroContainer">
    <div :class="$style.mobileMenuHamburgerContainer">
      <BaseIcon
        tag="a"
        href="#"
        :class="$style.hamburgerIcon"
        size="lg"
        icon="bars"
        @click.prevent="showSideMenu"
      />
    </div>
    <h1 :class="$style.title">
      <span :class="$style.titlePrefix"> Vue </span>
      The Road to Enterprise
    </h1>
    <h2 :class="$style.chapter">Chapter: {{ chapter.title }}</h2>
    <h3 :class="$style.section">Section: {{ section.title }}</h3>
    <small :class="$style.author">By Thomas Findlay</small>
  </div>
</template>

<script>
import { SIDE_MENU_CONFIG } from '@/config'
import { showSideMenu } from '@/layout/components/side-menu/services/menuService'
export default {
  created() {},
  computed: {
    chapter() {
      const [_, chapterTitle] = this.$route.fullPath.split('/')
      if (!chapterTitle) return {}

      const chapterPath = `/${chapterTitle}`
      return SIDE_MENU_CONFIG.find(chapter => chapter.to === chapterPath) || {}
    },
    section() {
      const [_, __, sectionPath] = this.$route.fullPath.split('/')
      if (!sectionPath) return {}
      return (
        this.chapter?.sections?.find(section => section.to === sectionPath) ||
        {}
      )
    },
  },
  methods: {
    showSideMenu,
  },
}
</script>

<style module>
.mobileMenuHamburgerContainer {
  transform: translateY(2px);
  @apply text-blue-100 absolute pr-5 right-0 cursor-pointer;
  @screen md {
    @apply hidden;
  }
}

.hamburgerIcon {
  @apply text-blue-100;
}

.pageIntroContainer {
  @apply bg-blue-800 mb-4 py-3 relative;
  @screen md {
    @apply mb-8 py-5;
  }
}
.title,
.chapter,
.section,
.author,
.titlePrefix {
  @apply text-blue-100 text-center;
}

.chapter,
.section,
.author {
  @apply hidden;
  @screen md {
    @apply block;
  }
}

.title {
  @apply text-2xl leading-tight font-heading;
  @screen md {
    @apply text-5xl mb-4;
  }
}

.titlePrefix {
  @apply hidden font-heading;

  @screen md {
    @apply block;
  }
}

.chapter {
  @apply mb-3 text-2xl;
}

.section {
  @apply mb-4 text-xl;
}

.author {
  @apply hidden text-base text-blue-100;
  @screen md {
    @apply block;
  }
}
</style>
