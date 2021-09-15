<template>
  <BaseStack vertical>
    <BaseStack class="justify-between mb-4">
      <p>Set API status</p>
      <p>Current status: {{ status }}</p>
    </BaseStack>
    <BaseStack class="space-x-2">
      <BaseButton
        @click.prevent="$emit('change-status', apiStatus.IDLE)"
        :class="$style.idleButton"
        >Idle</BaseButton
      >
      <BaseButton
        @click.prevent="$emit('change-status', apiStatus.PENDING)"
        :class="$style.pendingButton"
        >Pending</BaseButton
      >
      <BaseButton
        @click.prevent="$emit('change-status', apiStatus.SUCCESS)"
        :class="$style.successButton"
        >Success</BaseButton
      >
      <BaseButton
        @click.prevent="$emit('change-status', apiStatus.ERROR)"
        :class="$style.errorButton"
        >Error</BaseButton
      >
    </BaseStack>
  </BaseStack>
</template>
<script>
import { apiStatus } from "@/api";

export default {
  props: {
    status: {
      type: Symbol,
      required: true,
    },
  },
  created() {
    this.apiStatus = apiStatus;
  },
};
</script>
<style module>
.idleButton {
  @apply bg-indigo-100 text-indigo-700 border border-indigo-700;

  &:hover {
    @apply text-indigo-800 bg-indigo-100;
  }
}

.pendingButton {
  @apply bg-teal-100 text-teal-700 border border-teal-700;
  &:hover {
    @apply text-teal-800 bg-teal-200;
  }
}

.successButton {
  @apply bg-green-600 text-green-100;

  &:hover {
    @apply bg-green-700;
  }
}

.errorButton {
  @apply bg-red-700;
  &:hover {
    @apply bg-red-800;
  }
}
</style>
