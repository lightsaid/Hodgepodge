import { ref, computed } from 'vue'

export const useStepper = (options = {}) => {
  const { initialStep = 1, maxSteps } = options

  const step = ref(initialStep)
  const prevStep = computed(() => step.value - 1)
  const nextStep = computed(() => step.value + 1)

  const goToPrevStep = () => {
    if (step.value < 2) return
    step.value--
  }

  const goToNextStep = () => {
    if (Number.isInteger(maxSteps) && step.value >= maxSteps) return
    step.value++
  }

  const setStep = step => {
    if (!Number.isInteger(step))
      throw new TypeError('A step value must be an integer.')
    step.value = step
  }

  return {
    step,
    prevStep,
    nextStep,
    goToPrevStep,
    goToNextStep,
    setStep,
  }
}
