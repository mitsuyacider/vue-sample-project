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

import "common.scss";
import Vue from "vue";
import App from "@/App.vue";
import store from "@/store";
import VueRouter from "vue-router";
Vue.config.productionTip = false;
Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "index",
//     component: Hoge,
//     // children: [
//     //   {
//     //     path: '',
//     //     name: 'index',
//     //     component: require('./pages/Index/Index.vue').default,
//     //   },
//     //   {
//     //     path: '/about/',
//     //     name: 'about'
//     //     component: require('./pages/About/About.vue').default
//     //   }
//     // ]
//   },
//   {
//     path: "/hoge",
//     name: "hoge",
//     component: Hoge,
//     children: [
//       {
//         path: "/hoge/:id",
//         name: "hogehoge",
//         component: HogeChildren,
//       },
//     ],
//   },
//   {
//     path: "/foo",
//     name: "foo",
//     component: Foo,
//   },
// ];
// const router = new VueRouter({
//   // mode: "history",
//   routes,
// });

new Vue({
  // router,
  store,
  render: (h) => h(App),
}).$mount("#app");

window.addEventListener("DOMContentLoaded", () => {
  console.log("hallo world");
});
