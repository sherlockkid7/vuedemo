import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VeeValidate from "vee-validate";
import helper from "./lib/helper";
//引入mint-ui样式
import 'mint-ui/lib/style.css'
// 导入vee-validate3.0插件
// import { ValidationProvider, extend,configure } from "vee-validate";
// // install rules and localization
// import * as rules from "vee-validate/dist/rules";
// Object.keys(rules).forEach(rule => {
//   extend(rule, rules[rule]);
// });
// configure({
//   classes: {
//     invalid: 'is-invalid'
//   }
// })
// Register it globally
// Vue.component("ValidationProvider", ValidationProvider);

import "./lib/hotcss/hotcss.js";
// 是阻止显示生产模式的消息

Vue.config.productionTip = false;

Vue.use(VeeValidate);

router.beforeEach((to,from,next) =>{
  if(to.path != "/"){
    // 校验用户是否登录
    if(helper.getTypes(store.getters.getLoginUser) === "Object"){
      next();
    }else{
      next("/");
    }
  }else{
    next();
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
