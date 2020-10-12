import LocalStorage from "@/js/db/LocalStorage";

const mockOwnershipList = [
  // {
  //   ownershipId: "1",
  //   gameId: "1",
  //   userId: "1",
  //   state: "granted",
  //   registeredDate: "06/08/2020",
  // },
  // {
  //   ownershipId: "2",
  //   gameId: "2",
  //   userId: "1",
  //   state: "granted",
  //   registeredDate: "06/08/2020",
  // },
  // {
  //   ownershipId: "3",
  //   gameId: "3",
  //   userId: "1",
  //   state: "granted",
  //   registeredDate: "06/08/2020",
  // },
  // {
  //   ownershipId: "4",
  //   gameId: "2",
  //   userId: "4",
  //   state: "granted",
  //   registeredDate: "06/08/2020",
  // },
  // {
  //   ownershipId: "5",
  //   gameId: "1",
  //   userId: "3",
  //   state: "granted",
  //   registeredDate: "06/08/2020",
  // },
];

export const ownershipModule = {
  namespaced: true,
  state: () => ({
    ownershipList: [],
    userData: 0,
  }),
  mutations: {
    deleteOwnership(state, ownershipId) {
      const ownershipList = state.ownershipList;
      const deleteOwnershipListIndex = ownershipList.findIndex(
        (ownership) => ownership.ownershipId === ownershipId
      );
      ownershipList.splice(deleteOwnershipListIndex, 1);
    },
    setAllOwnership(state, data) {
      state.ownershipList = data;
    },
    setOwnerships(state, data) {
      if (data && data.length > 0) {
        const ownershipList = state.ownershipList;
        state.ownershipList.push(...data);
      }
    },
    changeOwnership(state, data) {
      const newState = data.modified === "Grant" ? "granted" : "revoked";
      const list = state.ownershipList;
      const hasOwner = (owner) => owner.ownershipId === data.ownershipId;

      // NOTE: Update ownership
      list.filter(hasOwner).map((owner) => {
        owner.state = newState;
        return owner;
      });
    },
  },
  actions: {
    async deleteOwnership({ commit }, ownershipId) {
      await deleteOwnership();
      commit("deleteOwnership", ownershipId);
    },
    async postOwnershipEdit({ commit }, ownership) {
      await postOwnershipEdit();
      commit("changeOwnership", ownership);
    },
    async getAllOwnership({ commit, rootState }) {
      const adminId = rootState.adminData.userId;
      const key = `${adminId}/ownerships`;
      const ownerships = await getAllOwnership(key);
      commit("setAllOwnership", ownerships);
    },
    async addOwnerships({ commit }, data) {
      await addOwnerships();

      const userIds = data.userIds;
      const items = userIds.map((userId) => {
        const ownershipId = Math.floor(Math.random() * 100);
        const ownership = {
          ownershipId,
          userId,
          gameId: data.gameId,
          state: "granted",
          registeredDate: new Date(),
        };

        return ownership;
      });

      commit("setOwnerships", items);
    },
  },
  getters: {
    ownershipList(state) {
      return state.ownershipList;
    },
    getOwnershipListByGameId: (state) => (gameId) => {
      return state.ownershipList.filter(
        (ownership) => ownership.gameId === gameId
      );
    },
    getOwnershipListByUserId: (state) => (userId) => {
      return state.ownershipList.filter(
        (ownership) => ownership.userId === userId
      );
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

const getAllOwnership = (key) => {
  return new Promise((resolve) => {
    const ownerships = LocalStorage.getItem(key) || [];
    resolve(ownerships);
  });
};

const deleteOwnership = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};

const addOwnerships = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};
