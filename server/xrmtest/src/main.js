import Vue from "vue";
import App from "./App.vue";
import Xrm from "../../../src/xrm";

Vue.config.productionTip = false;

(async () => {
  await Xrm.AuthToMicrosoft();
  new Vue({
    render: (h) => h(App),
  }).$mount("#app");
})();
