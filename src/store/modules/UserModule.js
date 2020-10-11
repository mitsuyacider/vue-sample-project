const mockUserList = [
  // {
  //   userId: "1",
  //   firstName: "Mitsuya1",
  //   lastName: "Watanabe1",
  //   password: "asdfafa",
  //   email: "mitsuya.watanabe85@gmail.com",
  //   dateOfBirth: "06/08/2020",
  // },
  // {
  //   userId: "2",
  //   firstName: "Mitsuya2",
  //   lastName: "Watanabe2",
  //   password: "asdfafa",
  //   email: "mitsuya.watanabe85@gmail.com",
  //   dateOfBirth: "06/08/2020",
  // },
  // {
  //   userId: "3",
  //   firstName: "Mitsuya3",
  //   lastName: "Watanabe3",
  //   password: "asdfafa",
  //   email: "mitsuya.watanabe85@gmail.com",
  //   dateOfBirth: "06/08/2020",
  // },
  // {
  //   userId: "4",
  //   firstName: "Mitsuya4",
  //   lastName: "Watanabe4",
  //   password: "asdfafa",
  //   email: "mitsuya.watanabe85@gmail.com",
  //   dateOfBirth: "06/08/2020",
  // },
];

export const userModule = {
  namespaced: true,
  state: () => ({
    userList: [],
    userData: 0,
  }),
  mutations: {
    getAllUser(state, data) {
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
    getAllUser({ commit }) {
      setTimeout(() => {
        commit("getAllUser", mockUserList);
      }, 1000);
    },
    async deleteUser({ commit }, userId) {
      await deleteUser();
      commit("deleteUser", userId);
    },
    async postUserEdit({ commit }, user) {
      await postUserEdit();
      commit("postUserEdit", user);
    },
    async createUser({ commit }, user) {
      await createUser();

      user.userId = Math.floor(Math.random() * 1000000);
      commit("createUser", user);
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

const deleteUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};

const createUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
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
