<template>
  <div>
    <ToggleProvider>
      <template #default="{ isOn, turnOn, turnOff, toggle }">
        <div>
          <BaseStack class="space-x-3" :class="[isOn && 'mb-4']">
            <BaseButton @click="turnOn">On</BaseButton>
            <BaseButton @click="turnOff">Off</BaseButton>
            <BaseButton @click="toggle">Toggle</BaseButton>
          </BaseStack>
          <BaseAlert v-if="isOn" class="mb-4"
            >Hooray, TogglerProvider is working!
          </BaseAlert>
        </div>
      </template>
    </ToggleProvider>
  </div>
</template>

<script>
import ToggleProvider from '@/components/common/ToggleProvider'
export default {
  components: {
    ToggleProvider,
  },
}
</script>

<style module></style>
