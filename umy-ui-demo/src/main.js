import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import UmyUi from "umy-ui";
import "umy-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(UmyUi);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");