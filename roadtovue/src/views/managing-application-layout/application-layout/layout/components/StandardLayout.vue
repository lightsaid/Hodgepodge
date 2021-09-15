<template>
  <div class="container mx-auto" :class="$style.standardLayout">
    <header :class="$style.header">
      <slot name="header" />
    </header>
    <aside :class="$style.aside">
      <slot name="aside" />
    </aside>
    <main :class="$style.content">
      <slot name="content" />
    </main>
    <footer :class="$style.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style module>
.standardLayout {
  display: grid;
  grid-template-rows: 4rem 1fr 4rem;
  grid-template-columns: 1fr 4fr;
  height: 600px;
  @apply bg-pink-200;
}

.header,
.aside,
.content,
.footer {
  display: grid;
  place-items: center;
}

.header {
  grid-column: span 2;
  @apply bg-teal-200;
}

.aside {
  @apply bg-indigo-200;
}

.content {
  @apply bg-purple-300;
}

.footer {
  grid-column: span 2;
  @apply bg-gray-400;
}
</style>
