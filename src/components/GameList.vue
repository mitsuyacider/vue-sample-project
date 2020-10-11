<template>
  <div>
    <b-overlay :show="isLoading" rounded="sm">
      <BaseListTable>
        <GameListHeader />
        <GameListRow
          v-for="game in this['game/gameList']"
          :key="game.gameId"
          :rowData="game"
        />
      </BaseListTable>

      <Pagination />
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
    ...mapActions(["game/getAllGame"]),
  },
};
</script>
