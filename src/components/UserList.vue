<template>
  <div>
    <b-overlay :show="isLoading" rounded="sm">
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
        There is no user data available. Let's create a new user!
      </div>
    </b-overlay>
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
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(["user/getAllUser", "user/deleteUser"]),
    deleteUser(user) {
      this.isLoading = true;
      this["user/deleteUser"](user.userId)
        .then((e) => (this.isLoading = false))
        .catch((err) => (this.isLoading = false));
    },
  },
};
</script>
