<template>
  <BaseListTable>
    <GameListHeader />
    <GameListRow />
  </BaseListTable>
</template>

<script>
import GameListHeader from "@/components/GameListHeader";
import GameListRow from "@/components/GameListRow";
import BaseListTable from "@/components/BaseListTable";
export default {
  components: {
    GameListHeader,
    GameListRow,
    BaseListTable,
  },
};
</script>
