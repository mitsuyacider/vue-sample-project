const mockGameList = [
  {
    gameId: "1",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "path/to/thumbnail.jpg",
  },
  {
    gameId: "2",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "path/to/thumbnail.jpg",
  },
  {
    gameId: "3",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "path/to/thumbnail.jpg",
  },
];

export const gameModule = {
  namespaced: true,
  state: () => ({
    gameList: [],
  }),
  mutations: {
    getAllGame(state, data) {
      state.gameList = data;
    },
    deleteGame(state, gameId) {
      const gameList = state.gameList;
      const deleteGameIndex = gameList.findIndex(
        (game) => game.gameId === gameId
      );
      gameList.splice(deleteGameIndex, 1);
    },
    postGameEdit(state, editedGame) {
      const gameList = state.gameList;
      gameList
        .filter((game) => editedGame.gameId === game.gameId)
        .map((game) => {
          return Object.assign(game, editedGame);
        });
    },
  },
  actions: {
    getAllGame({ commit }) {
      setTimeout(() => {
        commit("getAllGame", mockGameList);
      }, 1000);
    },
    async deleteGame({ commit }, gameId) {
      await deleteGame();
      commit("deleteGame", gameId);
    },
    async postGameEdit({ commit }, game) {
      await postGameEdit();
      commit("postGameEdit", game);
    },
  },
  getters: {
    gameList(state) {
      return state.gameList;
    },
  },
};

const deleteGame = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};

const postGameEdit = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};
