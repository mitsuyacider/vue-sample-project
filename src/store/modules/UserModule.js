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
  },
  actions: {
    getAllUser({ commit }) {
      setTimeout(() => {
        commit("getAllUser", mockUserList);
      }, 1000);
    },
  },
  getters: {
    userList(state) {
      return state.userList;
    },
    user() {
      return 2;
    },
  },
};
