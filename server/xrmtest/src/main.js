import Vue from "vue";
import App from "./App.vue";
import Xrm from "../../../src/xrm";

Vue.config.productionTip = false;

(async () => {
  if (process.env.NODE_ENV !== "production") {
    await Xrm.AuthToMicrosoft();
  }
  new Vue({
    // store: store,
    render: (h) => h(App),
  }).$mount("#app");
})();
