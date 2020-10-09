<template>
  <BaseListTable>
    <UserListHeader />
    <UserListRow />
  </BaseListTable>
</template>

<script>
import UserListHeader from "@/components/UserListHeader";
import UserListRow from "@/components/UserListRow";
import BaseListTable from "@/components/BaseListTable";
export default {
  components: {
    UserListHeader,
    UserListRow,
    BaseListTable,
  },
};
</script>
