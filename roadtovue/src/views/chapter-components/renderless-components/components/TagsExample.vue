<template>
  <TagsProvider
    trackBy="id"
    :options="$options.defaultTags"
    @onTagAdded="onTagAdded"
    @onTagDeleted="onTagDeleted"
  >
    <template #default="{ tags, addTag, deleteTag }">
      <form>
        <!-- Vertical stack -->
        <BaseStack vertical class="mb-4">
          <!-- Label -->
          <BaseLabel class="mb-2" for="tag-input">Tags</BaseLabel>
          <!-- Horizontal stack -->
          <BaseStack
            v-if="tags.length"
            class="space-x-3"
            :class="$style.tagsContainer"
          >
            <!-- Loop through tags -->
            <Tag
              v-for="tag of tags"
              :key="tag.id"
              class="mb-2"
              :data-tag="tag.id"
            >
              <div :class="$style.tagContent">
                <!-- Tag text -->
                <span :class="$style.tagText">
                  {{ tag.text }}
                </span>
                <!-- Delete tag icon -->
                <div :class="$style.tagDeleteIcon">
                  <BaseIcon
                    tag="a"
                    @click.prevent="deleteTag(tag.id)"
                    icon="times"
                  />
                </div>
              </div>
            </Tag>
          </BaseStack>
          <!-- Add new tag input -->
          <BaseInput
            v-model="value"
            type="text"
            id="tag-input"
            placeholder="Add a tag..."
          />
        </BaseStack>
        <!-- Submit tag -->
        <BaseButton @click.prevent="onAddTag(addTag)">Add tag</BaseButton>
      </form>
    </template>
  </TagsProvider>
</template>

<script>
// @ is an alias to /src
import TagsProvider from '@/components/common/TagsProvider'
import Tag from '@/components/common/Tag'
import { getRandomUUID } from '@/helpers'

export default {
  name: 'TagsExample',
  data() {
    return {
      value: '',
    }
  },
  components: {
    TagsProvider,
    Tag,
  },
  methods: {
    onTagAdded({ tags, value }) {
      console.log('Tag added', { tags, value })
    },
    onTagDeleted({ tags, value }) {
      console.log('Tag deleted', { tags, value })
    },
    onAddTag(addTag) {
      if (!this.value) return
      // addTag is coming from the TagsProvider
      addTag({
        id: getRandomUUID(),
        text: this.value,
      })
      this.value = ''
    },
  },
  created() {
    this.$options.defaultTags = [
      {
        id: getRandomUUID(),
        text: 'Apple',
      },
      {
        id: getRandomUUID(),
        text: 'Orange',
      },
      {
        id: getRandomUUID(),
        text: 'Banana',
      },
    ]
  },
}
</script>
<style module>
.tagsContainer {
  @apply flex-wrap;
}

.tagContent {
  @apply flex justify-between items-center;
}

.tagText {
  @apply text-purple-700 font-semibold;
}

.tagDeleteIcon {
  @apply ml-2 text-purple-700 cursor-pointer;
}
</style>
