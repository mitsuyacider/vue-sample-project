const mockUserList = [
  {
    userId: "1",
    firstName: "Mitsuya",
    lastName: "Watanabe",
    password: "asdfafa",
    email: "mitsuya.watanabe85@gmail.com",
    dateOfBirth: "06/08/2020",
  },
  {
    userId: "2",
    firstName: "Mitsuya",
    lastName: "Watanabe",
    password: "asdfafa",
    email: "mitsuya.watanabe85@gmail.com",
    dateOfBirth: "06/08/2020",
  },
  {
    userId: "3",
    firstName: "Mitsuya",
    lastName: "Watanabe",
    password: "asdfafa",
    email: "mitsuya.watanabe85@gmail.com",
    dateOfBirth: "06/08/2020",
  },
  {
    userId: "4",
    firstName: "Mitsuya",
    lastName: "Watanabe",
    password: "asdfafa",
    email: "mitsuya.watanabe85@gmail.com",
    dateOfBirth: "06/08/2020",
  },
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
    postUserEdit({ commit }, user) {
      setTimeout(() => {
        commit("postUserEdit", user);
      }, 1000);
    },
  },
  getters: {
    userList(state) {
      return state.userList;
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
