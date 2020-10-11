const mockOwnershipList = [
  {
    ownershipId: "1",
    gameId: "1",
    userId: "1",
    state: "granted",
    registeredDate: "06/08/2020",
  },
  {
    ownershipId: "2",
    gameId: "2",
    userId: "1",
    state: "granted",
    registeredDate: "06/08/2020",
  },
  {
    ownershipId: "3",
    gameId: "3",
    userId: "1",
    state: "granted",
    registeredDate: "06/08/2020",
  },
  {
    ownershipId: "4",
    gameId: "2",
    userId: "4",
    state: "granted",
    registeredDate: "06/08/2020",
  },
  {
    ownershipId: "5",
    gameId: "1",
    userId: "3",
    state: "granted",
    registeredDate: "06/08/2020",
  },
];

export const ownershipModule = {
  namespaced: true,
  state: () => ({
    ownershipList: [],
    userData: 0,
  }),
  mutations: {
    deleteOwnership(state, ownershipId) {
      const userList = state.ownershipList;
      const deleteUserIndex = ownershipList.findIndex(
        (ownership) => ownership.ownershipId === ownershipId
      );
      userList.splice(deleteUserIndex, 1);
    },
  },
  actions: {
    async deleteOwnership({ commit }, ownershipId) {
      await deleteOwnership();
      // commit("deleteOwnership", ownershipId);
    },
    async postOwnershipEdit({ commit }, ownership) {
      await postOwnershipEdit();
    },
  },
  getters: {
    ownershipList(state) {
      return state.ownershipList;
    },
  },
};

const postOwnershipEdit = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};

const deleteOwnership = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};
