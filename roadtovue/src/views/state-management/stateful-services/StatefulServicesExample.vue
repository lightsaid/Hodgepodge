<template>
  <div>
    <BaseContentHeading tag="h2">Stateful services</BaseContentHeading>
    <BaseCard>
      <BaseCardTitle>Global User Service example</BaseCardTitle>

      <BaseCardContent>
        <div class="space-y-4">
          <p>
            Hello there {{ user.name }}. This name is coming from the a global
            user services placed in
            <span class="font-semibold">services/stateful/userService.js</span>
            directory.
          </p>
          <p>
            If you change the name below, it will update here and in the chat
            bubble.
          </p>

          <div class="space-x-4">
            <BaseLabel>Change name:</BaseLabel>
            <BaseInput
              :modelValue="user.name"
              @update:modelValue="onChangeUserName"
            />
          </div>
        </div>
      </BaseCardContent>
    </BaseCard>
    <ChatBubble />
  </div>
</template>

<script>
import ChatBubble from './components/ChatBubble'
import { userComputed, setUser } from '@/services/stateful/userService'
export default {
  components: {
    ChatBubble,
  },
  computed: {
    ...userComputed,
  },
  methods: {
    onChangeUserName(name) {
      setUser({
        name,
      })
    },
  },
}
</script>

<style module></style>
