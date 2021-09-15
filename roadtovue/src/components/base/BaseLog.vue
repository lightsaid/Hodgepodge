<script>
export default {
  props: ['log'],
  setup(props, { attrs }) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`%c LOG: `, 'background: #222; color: #bada55', props.log)
    }
    return () => null
  },
}
</script>
