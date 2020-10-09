import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("renders when passed", () => {
    const wrapper = shallowMount(App);
    expect(wrapper).not.toBeUndefined();
  });
});
