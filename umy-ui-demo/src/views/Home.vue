<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <UXGrid />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import UXGrid from "@/components/UXGrid.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    UXGrid,
  },
};
</script>
