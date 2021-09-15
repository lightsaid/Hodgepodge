<script>
export default {
  emits: ['on-tag-added', 'on-tag-deleted'],
  render() {
    const { tags, addTag, deleteTag } = this
    return this.$slots.default({
      tags,
      addTag,
      deleteTag,
    })
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    trackBy: {
      type: String,
    },
  },
  watch: {
    options: {
      handler(value) {
        if (Array.isArray(value)) this.tags = [...value]
      },
      immediate: true,
    },
  },
  data() {
    return {
      tags: [...this.options],
    }
  },
  methods: {
    addTag(value) {
      this.tags.push(value)
      this.$emit('on-tag-added', { tags: this.tags, value })
    },
    deleteTag(value) {
      if (this.trackBy) {
        this.tags = this.tags.filter(tag => tag[this.trackBy] !== value)
      } else {
        // We have no trackBy property, so we assume
        // that the value passed is an index
        this.tags.splice(value, 1)
      }

      this.$emit('on-tag-deleted', { tags: this.tags, value })
    },
    /**
     * Used via ref to extract tags
     */
    getTags() {
      return this.tags
    },
  },
}
</script>

<style module></style>
