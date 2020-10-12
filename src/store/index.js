import Vue from "vue";
import Vuex from "vuex";

// NOTE: Modules
import { userModule } from "@/store/modules/UserModule";
import { ownershipModule } from "@/store/modules/OwnershipModule";
import { gameModule } from "@/store/modules/GameModule";

Vue.use(Vuex);

// NOTE: Test user account for this assignment.
const defaultAdminData = {
  userId: "123",
  firstName: "Maxine",
  lastName: "Mitchell",
  email: "test@acmegames.com",
  password: "acmegames",
  dateOfBirth: "1985/08/06",
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
    loginUserData: {},
    // adminData: {},
  },
  mutations: {
    setAdminData(state, data) {
      state.adminData = data;
    },
    setLoginUserData(state, data) {
      state.loginUserData = data;
    },
  },
  actions: {
    setAdminData({ commit }, data) {
      commit("setAdminData", data);
    },
    setLoginUserData({ commit }, data) {
      commit("setLoginUserData", data);
    },
  },
  getters: {
    hasAdminData(state) {
      return Object.keys(state.adminData).length > 0;
    },
    hasLoginUserData(state) {
      return Object.keys(state.loginUserData).length > 0;
    },
    loginUserData(state) {
      return state.loginUserData;
    },
    adminData(state) {
      return state.adminData;
    },
    defaultAdminData(_) {
      return defaultAdminData;
    },
  },
});
