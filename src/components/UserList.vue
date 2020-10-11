<template>
  <div>
    <div v-if="this['user/userList'].length > 0">
      <BaseListTable>
        <UserListHeader />

        <UserListRow
          v-for="user in this['user/userList']"
          :key="user.userId"
          :user="user"
          @onClickTrash="deleteUser"
        />
      </BaseListTable>
      <Pagination />
    </div>
    <div v-else>
      No data
    </div>
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
  },
  methods: {
    ...mapActions(["user/getAllUser", "user/deleteUser"]),
    deleteUser(user) {
      this["user/deleteUser"](user.userId);
    },
  },
};
</script>
