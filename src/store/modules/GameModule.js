import LocalStorage from "@/js/db/LocalStorage";

const mockGameList = [
  {
    gameId: "1",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "http://placehold.jp/24/cc9999/993333/80x50.png",
  },
  {
    gameId: "2",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "http://placehold.jp/24/cc9999/993333/80x50.png",
  },
  {
    gameId: "3",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "http://placehold.jp/24/cc9999/993333/80x50.png",
  },
  {
    gameId: "4",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "http://placehold.jp/24/cc9999/993333/80x50.png",
  },
  {
    gameId: "5",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "http://placehold.jp/24/cc9999/993333/80x50.png",
  },
  {
    gameId: "6",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "http://placehold.jp/24/cc9999/993333/80x50.png",
  },
  {
    gameId: "7",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "http://placehold.jp/24/cc9999/993333/80x50.png",
  },
  {
    gameId: "8",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "http://placehold.jp/24/cc9999/993333/80x50.png",
  },
  {
    gameId: "9",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "http://placehold.jp/24/cc9999/993333/80x50.png",
  },
  {
    gameId: "10",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "http://placehold.jp/24/cc9999/993333/80x50.png",
  },
  {
    gameId: "11",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "http://placehold.jp/24/cc9999/993333/80x50.png",
  },
  {
    gameId: "12",
    gameName: "Acme Game",
    ageRestriction: 18,
    thumbnail: "http://placehold.jp/24/cc9999/993333/80x50.png",
  },
];

export const gameModule = {
  namespaced: true,
  state: () => ({
    gameList: [],
  }),
  mutations: {
    settAllGame(state, data) {
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
          // NOTE: Assign updated data to game list
          return Object.assign(game, editedGame);
        });
    },
    createGame(state, newGame) {
      state.gameList.push(newGame);
    },
  },
  actions: {
    async getAllGame({ commit, rootState }) {
      const adminId = rootState.adminData.userId;
      const key = `${adminId}/games`;
      const games = await getAllGame(key);

      commit("settAllGame", games);
    },
    async deleteGame({ commit }, gameId) {
      await deleteGame();
      commit("deleteGame", gameId);
    },
    async postGameEdit({ commit }, game) {
      await postGameEdit();
      commit("postGameEdit", game);
    },
    async createGame({ commit }, game) {
      await createGame();
      game.gameId = Math.floor(Math.random() * 1000000);

      commit("createGame", game);
    },
  },
  getters: {
    gameList(state) {
      return state.gameList;
    },
    getGameById: (state) => (gameId) => {
      return state.gameList.filter((game) => game.gameId == gameId)[0];
    },
  },
};

const getAllGame = (key) => {
  return new Promise((resolve) => {
    const games = LocalStorage.getItem(key) || [];
    resolve(games);
  });
};

const deleteGame = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};

const createGame = () => {
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
