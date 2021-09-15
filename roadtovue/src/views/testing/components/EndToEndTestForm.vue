<template>
  <div>
    <BaseCard>
      <BaseCardTitle>
        End to End Form stepper example
      </BaseCardTitle>
      <BaseCardContent>
        <div v-if="submitted">
          Welcome new user!
        </div>

        <!-- 
          
          User registration form with a stepper 

          Tests are in the tests/e2e directory
          
          -->
        <Stepper v-else>
          <template #default="{step, goToNextStep, goToPrevStep}">
            <form :class="$style.registerForm">
              <h2 class="mb-4 font-semibold">Register form</h2>
              <div class="mb-4">
                <template v-if="step === 1">
                  <div :class="$style.formBlock">
                    <BaseLabel for="name">
                      Name
                    </BaseLabel>
                    <BaseInput v-model="form.name" id="name" />
                  </div>
                  <div :class="$style.formBlock">
                    <BaseLabel for="surname">
                      Surname
                    </BaseLabel>
                    <BaseInput v-model="form.surname" id="surname" />
                  </div>
                </template>
                <template v-if="step === 2">
                  <div :class="$style.formBlock">
                    <BaseLabel for="address">
                      Address
                    </BaseLabel>
                    <BaseInput v-model="form.address" id="address" />
                  </div>
                  <div :class="$style.formBlock">
                    <BaseLabel for="city">
                      City
                    </BaseLabel>
                    <BaseInput v-model="form.city" id="city" />
                  </div>
                </template>
                <template v-if="step === 3">
                  <div :class="$style.formBlock">
                    <BaseLabel for="email">
                      Email
                    </BaseLabel>
                    <BaseInput v-model="form.email" id="email" />
                  </div>
                  <div :class="$style.formBlock">
                    <BaseLabel for="password">
                      Password
                    </BaseLabel>
                    <BaseInput v-model="form.password" id="password" />
                  </div>
                </template>
              </div>

              <div class="flex justify-between">
                <div>
                  <BaseButton
                    v-if="step > 1"
                    buttonClass="px-0"
                    :class="$style.stepperBtn"
                    variant="link"
                    @click.prevent="goToPrevStep"
                  >
                    Previous
                  </BaseButton>
                </div>
                <div>
                  <BaseButton
                    v-if="step < 3"
                    buttonClass="px-0"
                    :class="$style.stepperBtn"
                    variant="link"
                    @click.prevent="goToNextStep"
                  >
                    Next
                  </BaseButton>

                  <BaseButton v-if="step === 3" @click.prevent="onSubmit">
                    Submit
                  </BaseButton>
                </div>
              </div>
            </form>
          </template>
        </Stepper>
      </BaseCardContent>
    </BaseCard>
  </div>
</template>

<script>
import Stepper from '@/components/common/stepper/Stepper.vue'
export default {
  name: 'EndToEndTestForm',
  components: {
    Stepper,
  },
  data() {
    return {
      form: {
        name: '',
        surname: '',
        address: '',
        city: '',
        email: '',
        password: '',
      },
      submitted: false,
    }
  },
  methods: {
    onSubmit() {
      // Fake register post
      // It is intercepted by Cypress to check the payload
      fetch('/post-user', {
        method: 'post',
        body: JSON.stringify(this.form),
      })
      this.submitted = true
    },
  },
}
</script>

<style module>
.registerForm {
  max-width: 400px;
}
.formBlock {
  @apply flex justify-between items-center mb-4;
}

.stepperBtn {
  min-width: auto;
  @apply px-0;
}
</style>
