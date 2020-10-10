<template>
  <div>
    <BaseListTable>
      <OwnershipListHeader />
      <OwnershipListRow />
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
  components: {
    OwnershipListHeader,
    OwnershipListRow,
    BaseListTable,
    Pagination,
  },
};
</script>
