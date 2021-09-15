<template>
  <div>
    <BaseContentHeading>Managing application layout</BaseContentHeading>
    <RouteMetaLayoutExample />
    <DynamicLayoutExample />
    <ProductLayoutExample />
    <LayoutFactoryExample />
  </div>
</template>

<script>
import RouteMetaLayoutExample from './components/RouteMetaLayoutExample'
import DynamicLayoutExample from './components/DynamicLayoutExample'
import ProductLayoutExample from './components/ProductLayoutExample'
import LayoutFactoryExample from './components/LayoutFactoryExample'

export default {
  components: {
    RouteMetaLayoutExample,
    DynamicLayoutExample,
    ProductLayoutExample,
    LayoutFactoryExample,
  },
}
</script>

<style module></style>
