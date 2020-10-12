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

const testAdminUsers = [
  defaultAdminData,
  {
    userId: "456",
    firstName: "Rene",
    lastName: "Brown",
    email: "test2@acmegames.com",
    password: "acmegames",
    dateOfBirth: "1990/07/06",
  },
  {
    userId: "789",
    firstName: "Freddie",
    lastName: "Morales",
    email: "test3@acmegames.com",
    password: "acmegames",
    dateOfBirth: "1976/4/6",
  },
];

export default new Vuex.Store({
  modules: {
    user: userModule,
    ownership: ownershipModule,
    game: gameModule,
  },
  state: {
    // NOTE: Initial data for this assignment
    adminData: defaultAdminData,
    // adminData: {},
    testAdminUsers,
  },
  mutations: {
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
    defaultAdminData(_) {
      return defaultAdminData;
    },
    loginUserInfo: (state) => (email, password) => {
      const testUsers = state.testAdminUsers;
      const userInfo = testUsers.filter(
        (user) => user.email === email && user.password == password
      );

      return userInfo[0];
    },
  },
});
