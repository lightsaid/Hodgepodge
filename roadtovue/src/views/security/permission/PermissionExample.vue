<template>
  <BaseContentHeading tag="h2">Access Permission</BaseContentHeading>
  <div class="space-y-4">
    <BaseCard>
      <BaseCardTitle>Restricting access to pages and content</BaseCardTitle>
      <BaseCardContent>
        <BaseHeading tag="h4">Set user permissions</BaseHeading>
        <p class="my-4 italic">
          You can modify user permissions and user ID to test examples below.
        </p>
        <div class="space-y-4">
          <div :class="$style.permissionBlock">
            <label :class="$style.permissionLabel">Logged in:</label>
            <BaseToggleSwitch
              :modelValue="!!userId"
              @update:modelValue="onToggleLoggedIn"
            />
          </div>

          <div :class="$style.permissionBlock">
            <label :class="$style.permissionLabel">Moderator:</label>
            <BaseToggleSwitch v-model="permissions.moderator" />
          </div>

          <div :class="$style.permissionBlock">
            <label :class="$style.permissionLabel">Admin:</label>
            <BaseToggleSwitch v-model="permissions.admin" />
          </div>

          <div :class="$style.permissionBlock">
            <label :class="$style.permissionLabel">User ID:</label>
            <div class="w-24">
              <BaseInput v-model="userId" />
            </div>
          </div>
        </div>
      </BaseCardContent>
    </BaseCard>
    <Comments />
    <PagePermission />
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUser } from '@/composables/useUser'
import Comments from './components/Comments.vue'
import PagePermission from './components/PagePermission.vue'

export default {
  name: 'PermissionExample',
  components: {
    Comments,
    PagePermission,
  },
  setup() {
    const PERMISSION_EXAMPLE_PATH = '/security/permission'
    const router = useRouter()
    const route = useRoute()

    // Reset the URL to hide Page permission examples
    if (route.fullPath.value !== PERMISSION_EXAMPLE_PATH) {
      router.push(PERMISSION_EXAMPLE_PATH)
    }

    const { user, updateUser } = useUser()
    const roles = user.value?.roles || []
    const setUserId = id => updateUser('id', id)
    const setRoles = roles => updateUser('roles', roles)
    /**
     * Store permissions for toggles
     */
    const permissions = ref({
      moderator: false,
      admin: false,
    })

    /**
     * Two-way computed
     */
    const userId = computed({
      get: () => user.value?.id,
      set: id => {
        setUserId(id)
      },
    })

    /**
     * Whenever permission toggles are updated
     * we need to update user roles
     */
    watch(
      permissions,
      permissions => {
        const roles = Object.entries(permissions).reduce(
          (acc, [role, isOn]) => {
            isOn && acc.push(role)
            return acc
          },
          []
        )
        /**
         * If there are roles, but there is no userId, then set one
         * There should be no scenario in which we have roles, but no user id
         * then update roles
         */
        if (roles.length && !userId.value) setUserId(1)
        setRoles(roles)
      },
      {
        deep: true,
      }
    )

    /**
     * If logged in toggle is switched on then we set userId to 1
     * and reset the route to hide page permission components
     * Also, reset roles on logged out user
     */
    const onToggleLoggedIn = value => {
      setUserId(value ? 1 : null)
      if (!value) {
        permissions.value = {
          moderator: false,
          admin: false,
        }
      }
      router.push(PERMISSION_EXAMPLE_PATH)
    }

    return {
      userId,
      permissions,
      setUserId,
      roles,
      onToggleLoggedIn,
    }
  },
}
</script>

<style module>
.permissionBlock {
  @apply flex items-center justify-between w-64;
}

.permissionLabel {
  @apply mr-4 flex-shrink-0;
}
</style>
