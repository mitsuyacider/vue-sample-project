<template>
  <div>
    <BaseListTable>
      <UserListHeader />
      <UserListRow />
    </BaseListTable>
    <Pagination />
  </div>
</template>

<script>
import UserListHeader from "@/components/UserListHeader";
import UserListRow from "@/components/UserListRow";
import BaseListTable from "@/components/BaseListTable";
import Pagination from "@/components/Pagination";

export default {
  components: {
    UserListHeader,
    UserListRow,
    BaseListTable,
    Pagination,
  },
};
</script>
