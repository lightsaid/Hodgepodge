<!-- 
  This is an original business card form component which handles
  form state by itself
-->

<template>
  <div class="shadow-md p-8">
    <h2 class="text-2xl font-semibold mb-4">Business Card Form</h2>
    <form>
      <div :class="$style.formBlock">
        <label :class="$style.formLabel">Avatar</label>
        <input type="file" @change="onFileUpload" />
      </div>

      <div :class="$style.formBlock">
        <label :class="$style.formLabel">Name</label>
        <input :class="$style.formInput" type="text" v-model="name" />
      </div>
      <div :class="$style.formBlock">
        <label :class="$style.formLabel">Description</label>
        <input :class="$style.formInput" type="text" v-model="description" />
      </div>
      <div :class="$style.formBlock">
        <label :class="$style.formLabel">Phone number</label>
        <input :class="$style.formInput" type="text" v-model="phoneNumber" />
      </div>
      <div :class="$style.formBlock">
        <label :class="$style.formLabel">Address</label>
        <input :class="$style.formInput" type="text" v-model="address" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatarFile: null,
      name: '',
      phoneNumber: '',
      description: '',
      address: '',
    }
  },
  methods: {
    onFileUpload(e) {
      const file = e.target.files?.[0]
      console.log('file', file)
      this.avatarFile = file
    },
  },
}
</script>

<style module>
.formBlock {
  @apply flex flex-col mb-6;
}

.formLabel {
  @apply mb-3 font-semibold;
}

.formInput {
  @apply border border-gray-100 shadow px-4 py-3;
}
</style>
