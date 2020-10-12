<template>
  <div>
    <b-overlay :show="isLoading" rounded="sm">
      <div v-if="this['user/userList'].length > 0">
        <BaseListTable>
          <UserListHeader />

          <UserListRow
            v-for="user in userList"
            :key="user.userId"
            :user="user"
            @onClickTrash="deleteUser"
          />
        </BaseListTable>

        <Pagination
          v-if="pagerData.rows > pagerData.perPage"
          :pagerData="pagerData"
          @onChangePage="handleOnChangePage"
        />
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
    pagerData() {
      return {
        rows: this["user/userList"].length,
        perPage: 10,
      };
    },
    userList() {
      const page = this.currentPage;
      const total = this["user/userList"];
      const perPage = this.pagerData.perPage;
      const start = (page - 1) * perPage;
      const end = page * perPage;
      return total.slice(start, end);
    },
  },
  data() {
    return {
      isLoading: false,
      currentPage: 1,
    };
  },
  methods: {
    ...mapActions(["user/getAllUser", "user/deleteUser"]),
    deleteUser(user) {
      this.isLoading = true;
      this["user/deleteUser"](user.userId)
        .then((e) => {
          if (this.userList.length === 0 && this.currentPage > 1)
            this.currentPage--;
        })
        .then((e) => (this.isLoading = false))
        .catch((err) => (this.isLoading = false));
    },
    handleOnChangePage(page) {
      this.currentPage = page;
    },
  },
};
</script>
