<template>
  <div>
    <BaseListTable>
      <OwnershipListHeader />
      <OwnershipListRow
        v-for="ownership in this.ownerships"
        :key="ownership.ownershipId"
        :rowData="ownership"
      />
    </BaseListTable>
    <Pagination />
  </div>
</template>

<script>
import OwnershipListHeader from "@/components/OwnershipListHeader";
import OwnershipListRow from "@/components/OwnershipListRow";
import BaseListTable from "@/components/BaseListTable";
import Pagination from "@/components/Pagination";

export default {
  props: {
    ownerships: {
      type: Array,
      value: [],
    },
  },
  components: {
    OwnershipListHeader,
    OwnershipListRow,
    BaseListTable,
    Pagination,
  },
};
</script>
