import Vue from "vue";
import Vuex from "vuex";
import { userModule } from "@/store/modules/UserModule";
import { ownershipModule } from "@/store/modules/OwnershipModule";
import { gameModule } from "@/store/modules/GameModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userModule,
    ownership: ownershipModule,
    game: gameModule,
  },
  state: {
    // NOTE: Initial data for this assignment
    adminData: {
      userId: "12345",
      name: {
        first: "Mitsuya",
        last: "Watanabe",
      },
      firstName: "Mitsuya",
      lastName: "Watanabe",
      email: "mitsuya.watanabe85@gmail.com",
      password: "sasfj!i1212",
      dateOfBirth: "08/06/1985",
    },
  },
  mutations: {
    getDummy(state, data) {
      state.dummy = data;
    },
    setAdminData(state, data) {
      state.adminData = data;
    },
  },
  actions: {
    setAdminData({ commit }, data) {
      commit("setAdminData", data);
    },
  },
  getters: {
    hasAdminData(state) {
      return Object.keys(state.adminData).length > 0;
    },
    adminData(state) {
      return state.adminData;
    },
  },
});
