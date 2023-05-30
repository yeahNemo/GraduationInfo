import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// 采用 theme-vue 插件来切换 Element-UI 主题
import Theme from "theme-vue";
import http from "@/utils/http";

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$http = http;

Vue.prototype.$theme = new Theme();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
