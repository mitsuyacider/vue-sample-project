import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Users from "@/pages/Users";
import Games from "@/pages/Games";
import UserEdit from "@/pages/UserEdit";
import GameEdit from "@/pages/GameEdit";
import Settings from "@/pages/Settings";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(BootstrapVue);
localVue.use(BootstrapVueIcons);
localVue.use(Vuex);

describe("App.vue", () => {
  const getters = {
    hasAdminData: () => 2,
    adminData: () => "input",
    "user/userList": () => "",
    "game/gameList": () => "",
    "user/getAllUser": () => "",
  };
  const actions = {
    "user/getAllUser": () => "",
    "game/getAllGame": () => "",
    "ownership/getAllOwnership": () => "",
  };

  const store = new Vuex.Store({
    actions,
    getters,
  });

  it("renders when passed", () => {
    const wrapper = shallowMount(App, { store, localVue });
    expect(wrapper).not.toBeUndefined();
  });
});

describe("Routing", () => {
  let routes;
  let router;
  let wrapper;
  let actions;

  const getters = {
    hasAdminData: () => true,
    adminData: () => {
      userId: "123";
    },
    "user/userList": () => "",
    "game/gameList": () => "",
    "user/getAllUser": () => "",
  };

  actions = {
    "user/getAllUser": () => "",
    "game/getAllGame": () => "",
    "ownership/getAllOwnership": () => "",
  };

  const store = new Vuex.Store({
    getters,
    actions,
  });

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
      {
        path: "/:adminId/settings",
        name: "Settings",
        component: Settings,
      },
    ];

    router = new VueRouter({ routes });
    wrapper = mount(App, {
      localVue,
      store,
      router,
    });
  });

  it("renders dashboard page via routing", async () => {
    expect(wrapper).not.toBeUndefined();

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

  it("renders settings page via routing", async () => {
    router.push("/123/settings");
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Settings).exists()).toBe(true);
  });
});
