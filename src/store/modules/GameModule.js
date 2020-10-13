import LocalStorage from "@/js/db/LocalStorage";
import { mockGameList, useTestData } from "@/js/db/TestData";

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

      // NOTE: Extract delete game id.
      const deleteGameIndex = gameList.findIndex(
        (game) => game.gameId === gameId
      );
      gameList.splice(deleteGameIndex, 1);
    },
    postGameEdit(state, editedGame) {
      // NOTE: Clone array. otherwise watch option doesn't fire after modification
      const gameList = state.gameList.slice();
      gameList
        .filter((game) => editedGame.gameId === game.gameId)
        .map((game) => {
          // NOTE: Assign updated data to game list
          return Object.assign(game, editedGame);
        });

      // NOTE: Apply updated list
      state.gameList = gameList;
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

      // NOTE: If test data available, use test data. Basically development mode.
      if (useTestData) {
        commit("settAllGame", mockGameList);
      } else {
        commit("settAllGame", games);
      }
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

/**
 * NOTE: APIs
 * Set loading duration on purpose from the perspective of user experience.
 */
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
    }, 1000);
  });
};

const createGame = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });
};

const postGameEdit = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });
};
