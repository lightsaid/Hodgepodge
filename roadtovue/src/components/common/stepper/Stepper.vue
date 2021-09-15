<script>
export default {
  props: {
    initialStep: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      step: this.initialStep,
    }
  },
  methods: {
    goToNextStep() {
      this.step++
    },
    goToPrevStep() {
      this.step--
    },
  },
  render() {
    const { step, goToNextStep, goToPrevStep } = this
    return this.$slots.default({
      step,
      goToNextStep,
      goToPrevStep,
    })
  },
}
</script>

<style module></style>
