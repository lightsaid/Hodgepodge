<script>
export default {
  props: {
    on: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOn: this.on,
    }
  },
  render(h) {
    const { isOn, toggle, turnOn, turnOff } = this

    return this.$slots.default({
      isOn,
      toggle,
      turnOn,
      turnOff,
    })
  },
  methods: {
    turnOn() {
      this.isOn = true
    },
    turnOff() {
      this.isOn = false
    },
    toggle() {
      this.isOn = !this.isOn
    },
  },
}
</script>

<style module></style>
