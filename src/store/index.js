import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dummy: "hallo",
  },
  mutations: {
    getDummy(state, data) {
      state.dummy = data;
    },
  },
  actions: {
    getDummy({ commit }) {
      setTimeout(() => {
        commit("getDummy", "hello world");
      }, 1000);
    },
  },
});
