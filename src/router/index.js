import Vue from "vue";
import Router from "vue-router";

// NOTE: Pages
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Users from "@/pages/Users";
import Games from "@/pages/Games";
import UserEdit from "@/pages/UserEdit";
import GameEdit from "@/pages/GameEdit";
import Settings from "@/pages/Settings";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Top",
      component: Login,
    },
    {
      path: "/:adminId/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/:adminId/users",
      name: "Users",
      component: Users,
    },
    {
      path: "/:adminId/games",
      name: "Games",
      component: Games,
    },
    {
      path: "/:adminId/users/:userId/edit",
      name: "UserEdit",
      component: UserEdit,
    },
    {
      path: "/:adminId/games/:gameId/edit",
      name: "GameEdit",
      component: GameEdit,
    },
    {
      path: "/:adminId/settings",
      name: "Settings",
      component: Settings,
    },
  ],
});
