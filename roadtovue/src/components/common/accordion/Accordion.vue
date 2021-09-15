<template>
  <div data-testid="accordion">
    <div
      v-for="(item, index) of items"
      :key="index"
      class="border"
      :class="[index < items.length - 1 && 'border-b-0']"
      data-testid="accordion-item"
    >
      <button
        class="px-4 py-3 block w-full cursor-pointer bg-gray-100 hover:bg-gray-200"
        @click.prevent="onAccordionItemHeaderClick(index)"
        data-testid="accordion-item-header"
      >
        {{ item.heading }}
      </button>
      <div
        v-show="openIndexes[index]"
        class="px-4 py-3 border-t"
        data-testid="accordion-item-content"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openIndexes: {},
    }
  },
  methods: {
    onAccordionItemHeaderClick(index) {
      this.openIndexes[index] = !this.openIndexes[index]
      // if (this.openIndexes[index]) {
      //   this.close(index)
      // } else {
      //   this.open(index)
      // }
    },
    // open(index) {
    //   this.openIndexes[index] = true
    // },
    // close(index) {
    //   this.openIndexes[index] = false
    // },
  },
}
</script>

<style module></style>
