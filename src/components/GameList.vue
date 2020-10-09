<template>
  <div>
    <BaseListTable>
      <GameListHeader />
      <GameListRow />
    </BaseListTable>

    <Pagination />
  </div>
</template>

<script>
import GameListHeader from "@/components/GameListHeader";
import GameListRow from "@/components/GameListRow";
import BaseListTable from "@/components/BaseListTable";
import Pagination from "@/components/Pagination";

export default {
  components: {
    GameListHeader,
    GameListRow,
    BaseListTable,
    Pagination,
  },
};
</script>
