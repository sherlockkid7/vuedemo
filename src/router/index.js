import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import User from "../views/User.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },{
      path: "/home",
      name: "Home",
      component: Home
  },{
    path: "/user",
    name: "User",
    component: User
}
  
];

const router = new VueRouter({
  routes
});

export default router;
