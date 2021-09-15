<template>
  <div class="p-8 container mx-auto grid grid-cols-2 gap-8">
    <BusinessCardForm
      v-model:name="name"
      v-model:phoneNumber="phoneNumber"
      v-model:description="description"
      v-model:address="address"
      @avatar-upload="onFileUpload"
    />
    <BusinessCardPreview
      :name="name"
      :phoneNumber="phoneNumber"
      :description="description"
      :address="address"
      :avatar="avatarPreview"
    />
  </div>
</template>

<script>
import BusinessCardForm from './components/BusinessCardForm'
import BusinessCardPreview from './components/BusinessCardPreview'
export default {
  components: {
    BusinessCardForm,
    BusinessCardPreview,
  },
  data() {
    return {
      avatarFile: null,
      name: '',
      phoneNumber: '',
      description: '',
      address: '',
      avatarPreview: '',
    }
  },
  methods: {
    onFileUpload(e) {
      const file = e.target.files?.[0]
      this.avatarFile = file

      // Reset preview if there is no file and bail out
      if (!file) {
        this.avatarPreview = ''
        return
      }

      // Get Base64 for the avatar preview

      const reader = new FileReader()
      reader.addEventListener(
        'load',
        () => {
          this.avatarPreview = reader.result
        },
        false
      )

      reader.readAsDataURL(file)
    },
  },
}
</script>

<style module></style>
