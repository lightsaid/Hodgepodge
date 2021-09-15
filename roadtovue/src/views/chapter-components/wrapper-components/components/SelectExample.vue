<!-- 
  This is a Vue 2 example and is not used in the Companion App.
  It's here to demonstrate how to create a wrapper component.
-->
<template>
  <div>
    <BaseStack vertical>
      <BaseLabel class="mb-2">Choose option</BaseLabel>
      <Select
        :options="$options.selectOptions"
        v-model="value"
        label="label"
        :clearOnSelect="false"
      >
        <template #option="option">
          <div :class="$style.option">
            <img :class="$style.img" :src="option.src" :alt="option.label" />
            <span>{{ option.label }}</span>
          </div>
        </template>
      </Select>
    </BaseStack>
  </div>
</template>

<script>
import Select from '@/components/common/Select'

export default {
  components: {
    Select,
  },
  data() {
    return {
      value: '',
    }
  },
  created() {
    this.$options.selectOptions = [
      {
        src: 'https://picsum.photos/id/100/75/50',
        label: 'Option One',
      },
      {
        src: 'https://picsum.photos/id/10/75/50',
        label: 'Option Two',
      },
    ]
  },
}
</script>

<style module>
.option {
  display: flex;
}
.img {
  display: block;
  max-width: 75px;
  max-height: 50px;
  margin-right: 10px;
}
</style>
