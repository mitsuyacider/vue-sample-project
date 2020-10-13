import LocalStorage from "@/js/db/LocalStorage";
import { mockUserList, useTestData } from "@/js/db/TestData";

export const userModule = {
  namespaced: true,
  state: () => ({
    userList: [],
    userData: 0,
  }),
  mutations: {
    setAllUser(state, data) {
      state.userList = data;
    },
    deleteUser(state, userId) {
      const userList = state.userList;
      const deleteUserIndex = userList.findIndex(
        (user) => user.userId === userId
      );
      userList.splice(deleteUserIndex, 1);
    },
    postUserEdit(state, editedUser) {
      const userList = state.userList;
      userList
        .filter((user) => editedUser.userId === user.userId)
        .map((user) => {
          return Object.assign(user, editedUser);
        });
    },
    createUser(state, newUser) {
      state.userList.push(newUser);
    },
  },
  actions: {
    async getAllUser({ commit, rootState }) {
      const adminId = rootState.adminData.userId;
      const key = `${adminId}/users`;
      const users = await getAllUser(key);

      // NOTE: If test data available, use test data. Basically development mode.
      if (useTestData) {
        commit("setAllUser", mockUserList);
      } else {
        commit("setAllUser", users);
      }
    },
    async deleteUser({ commit }, userId) {
      await deleteUser();
      commit("deleteUser", userId);
    },
    async postUserEdit({ commit }, user) {
      await postUserEdit();
      commit("postUserEdit", user);
    },
    async createUser({ commit, rootState }, user) {
      try {
        const adminId = rootState.adminData.userId;

        await createUser({ user, adminId });

        // NOTE: Should create unique id by an another algorithm
        user.userId = Math.floor(Math.random() * 1000000);
        commit("createUser", user);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  getters: {
    userList(state) {
      return state.userList;
    },
    getUserById: (state) => (id) => {
      return state.userList.filter((user) => user.userId == id)[0];
    },
  },
};

/**
 * NOTE: APIs
 */
const getAllUser = (key) => {
  return new Promise((resolve) => {
    const users = LocalStorage.getItem(key) || [];
    resolve(users);
  });
};

const deleteUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};

const createUser = ({ user, adminId }) => {
  return new Promise((resolve, reject) => {
    const key = `${adminId}/users`;
    const users = LocalStorage.getItem(key) || [];

    // NOTE: Check if the input email address has already existed in database
    const hasUser =
      users.filter(
        (dbUser) => dbUser.email.toLowerCase() == user.email.toLowerCase()
      ).length > 0;

    setTimeout(() => {
      if (hasUser) {
        reject("existing user");
      } else {
        resolve("resolved");
      }
    }, 1000);
  });
};

const postUserEdit = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};
