// NOTE: If importing these file, exposed as arbitary file name to dist folder
// sass-loader : compile sass file to css file;
// css-loader : resolve the path dependency in css files;
// mini-css-extract-plugin.loader : export css file;
//  ↑Exactly
// url-loader : resolve assets path, especially in css/scss file.
/**
 * @code
  header {
    background: url("../assets/header.jpg");
    height: 300px;
  }
 */
// NOTE: webpack-dev-server doesn't export bundle files to dist folder. It access to files on memory。

// NOTE: Styles
import "common.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Vue from "vue";
import App from "@/App.vue";
import store from "@/store";
import router from "@/router";
import {
  BootstrapVue,
  BootstrapVueIcons,
  BIcon,
  BIconArrowUp,
  BIconArrowDown,
} from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component("BIcon", BIcon);
Vue.component("BIconArrowUp", BIconArrowUp);
Vue.component("BIconArrowDown", BIconArrowDown);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
