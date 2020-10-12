<template>
  <div>
    <b-overlay :show="isLoading" rounded="sm">
      <div v-if="this['game/gameList'].length > 0">
        <BaseListTable>
          <GameListHeader />

          <GameListRow
            v-for="game in gameList"
            :key="game.gameId"
            :rowData="game"
            @onClickTrash="deleteGame"
          />
        </BaseListTable>

        <Pagination
          v-if="pagerData.rows > pagerData.perPage"
          :pagerData="pagerData"
          @onChangePage="handleOnChangePage"
        />
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
    pagerData() {
      return {
        rows: this["game/gameList"].length,
        perPage: 10,
      };
    },
    gameList() {
      const page = this.currentPage;
      const total = this["game/gameList"];
      const perPage = this.pagerData.perPage;
      const start = (page - 1) * perPage;
      const end = page * perPage;
      return total.slice(start, end);
    },
  },
  data() {
    return {
      isLoading: false,
      currentPage: 1,
    };
  },

  methods: {
    ...mapActions(["game/deleteGame"]),
    deleteGame(data) {
      const isConfirmed = confirm(
        `Are you sure you want to delete ${data.gameName}?`
      );

      if (isConfirmed) {
        this.isLoading = true;
        this["game/deleteGame"](data.gameId)
          .then((e) => {
            if (this.gameList.length === 0 && this.currentPage > 1)
              this.currentPage--;
          })
          .then((e) => (this.isLoading = false))
          .catch((err) => (this.isLoading = false));
      }
    },
    handleOnChangePage(page) {
      this.currentPage = page;
    },
  },
};
</script>
