import Vue from "vue";
import Vuex from "vuex";
import { userModule } from "@/store/modules/UserModule";
import { ownershipModule } from "@/store/modules/OwnershipModule";
import { gameModule } from "@/store/modules/GameModule";

Vue.use(Vuex);

const defaultAdminData = {
  userId: "12345",
  firstName: "Maxine",
  lastName: "Mitchell",
  email: "test@acmegames.com",
  password: "acmegames",
  dateOfBirth: "08/06/1985",
};

export default new Vuex.Store({
  modules: {
    user: userModule,
    ownership: ownershipModule,
    game: gameModule,
  },
  state: {
    // NOTE: Initial data for this assignment
    adminData: defaultAdminData,
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
    defaultAdminData(stae) {
      return defaultAdminData;
    },
  },
});
