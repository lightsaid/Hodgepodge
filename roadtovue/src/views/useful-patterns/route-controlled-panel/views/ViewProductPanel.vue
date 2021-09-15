<script>
import RoutePanel from '@/components/common/routePanel/RoutePanel.vue'
import products from '@/fixtures/products.json'

export default {
  components: {
    RoutePanel,
  },
  computed: {
    product() {
      return products.find(product => product.id == this.$route.params.id)
    },
  },
  render() {
    return (
      <RoutePanel panelClass={this.$style.productPanel}>
        <div class='p-6'>
          <div class='mb-4'>
            <h2 class='text-2xl font-bold mb-4'>{this.product.title}</h2>
            <p>{this.product.description}</p>
          </div>

          <router-link
            class='hover:underline'
            to='/useful-patterns/route-controlled-panel'
          >
            Back to products
          </router-link>
        </div>
      </RoutePanel>
    )
  },
}
</script>
<style module>
.productPanel {
  background-color: #fafafa;
}
</style>
