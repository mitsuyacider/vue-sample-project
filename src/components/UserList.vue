<template>
  <div>
    <BaseListTable>
      <UserListHeader />

      <UserListRow
        v-for="user in this['user/userList']"
        :key="user.userId"
        :user="user"
      />
    </BaseListTable>
    <Pagination />
  </div>
</template>

<script>
import UserListHeader from "@/components/UserListHeader";
import UserListRow from "@/components/UserListRow";
import BaseListTable from "@/components/BaseListTable";
import Pagination from "@/components/Pagination";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    UserListHeader,
    UserListRow,
    BaseListTable,
    Pagination,
  },
  computed: {
    ...mapGetters(["user/userList"]),
  },
  mounted() {
    this["user/getAllUser"]();
    console.log(this["user/userList"]);
  },
  methods: {
    ...mapActions(["user/getAllUser"]),
  },
};
</script>
