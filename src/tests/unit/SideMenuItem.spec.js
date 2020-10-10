import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import SideMenuItem from "@/components/SideMenuItem.vue";
import VueRouter from "vue-router";

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

describe("Computed test in SideMenuItem.vue", () => {
  beforeEach(() => {});

  it("returns true when correct path", () => {
    const $route = {
      path: "/dashboard",
      name: "/Dashboard",
    };

    const wrapper = shallowMount(SideMenuItem, {
      stubs: ["router-link"],
      mocks: {
        $route,
      },
      propsData: {
        linkName: "/Dashboard",
      },
    });

    expect(wrapper).not.toBeUndefined();
    expect(wrapper.vm.isSelected).toBe("true");
  });

  it("returns false when the route path is not found", () => {
    const $route = {
      path: "/dashboard",
      name: "/bad-access",
    };

    const wrapper = shallowMount(SideMenuItem, {
      stubs: ["router-link"],
      mocks: {
        $route,
      },
      propsData: {
        linkName: "/Dashboard",
      },
    });

    expect(wrapper.vm.isSelected).toBe("false");
  });
});
