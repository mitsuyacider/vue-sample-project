<template>
  <div>
    <b-overlay :show="isLoading" rounded="sm">
      <div v-if="this['game/gameList'].length > 0">
        <BaseListTable>
          <GameListHeader />
          <GameListRow
            v-for="game in this['game/gameList']"
            :key="game.gameId"
            :rowData="game"
            @onClickTrash="deleteGame"
          />
        </BaseListTable>

        <Pagination />
      </div>
      <div v-else>
        There is no game data. Let's create a new Game!
      </div>
    </b-overlay>
  </div>
</template>

<script>
import GameListHeader from "@/components/GameListHeader";
import GameListRow from "@/components/GameListRow";
import BaseListTable from "@/components/BaseListTable";
import Pagination from "@/components/Pagination";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    GameListHeader,
    GameListRow,
    BaseListTable,
    Pagination,
  },
  computed: {
    ...mapGetters(["game/gameList"]),
  },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    this["game/getAllGame"]();
  },
  methods: {
    ...mapActions(["game/getAllGame", "game/deleteGame"]),
    deleteGame(data) {
      const isConfirmed = confirm(
        `Are you sure you want to delete ${data.gameName}?`
      );

      if (isConfirmed) {
        this.isLoading = true;
        this["game/deleteGame"](data.gameId)
          .then((e) => (this.isLoading = false))
          .catch((err) => (this.isLoading = false));
      }
    },
  },
};
</script>
