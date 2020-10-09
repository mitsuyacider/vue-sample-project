import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";

import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Users from "@/pages/Users";
import Games from "@/pages/Games";
import UserEdit from "@/pages/UserEdit";
import GameEdit from "@/pages/GameEdit";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App.vue", () => {
  it("renders when passed", () => {
    const wrapper = shallowMount(App);
    expect(wrapper).not.toBeUndefined();
  });
});

describe("Routing", () => {
  let routes;
  let router;
  let wrapper;

  beforeEach(() => {
    routes = [
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
    ];

    router = new VueRouter({ routes });
    wrapper = mount(App, {
      localVue,
      router,
    });
  });

  it("renders dashboard page via routing", async () => {
    router.push("/123/dashboard");
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Dashboard).exists()).toBe(true);
  });

  it("renders users page via routing", async () => {
    router.push("/123/users");
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Users).exists()).toBe(true);
  });

  it("renders games page via routing", async () => {
    router.push("/123/games");
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Games).exists()).toBe(true);
  });

  it("renders user edit page via routing", async () => {
    router.push("/123/users/abc/edit");
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(UserEdit).exists()).toBe(true);
  });

  it("renders game edit page via routing", async () => {
    router.push("/123/games/abc/edit");
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(GameEdit).exists()).toBe(true);
  });
});
