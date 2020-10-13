<template>
  <div>
    <BaseListTable v-if="this.userList.length > 0">
      <thead class="thead-dark">
        <tr>
          <th></th>
          <th>#id</th>
          <th>Name</th>
        </tr>
      </thead>

      <!-- User list -->
      <GrantUserListRow
        v-for="user in userList"
        :key="user.userId"
        :user="user"
        :isChecked="hasUser(user.userId)"
      />
    </BaseListTable>

    <!-- If there is no user that can list in the modal, show this text -->
    <div v-else>There is no user available.</div>
  </div>
</template>

<script>
import BaseListTable from "@/components/BaseListTable";
import GrantUserListRow from "@/components/GrantUserListRow";
import { mapGetters } from "vuex";

export default {
  props: {
    user: {
      type: Object,
      value: {},
    },
    currentList: {
      type: Array,
      value: [],
    },
  },
  components: {
    BaseListTable,
    GrantUserListRow,
  },
  computed: {
    ...mapGetters(["user/userList"]),
  },
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    this.userList = this["user/userList"].filter(
      (user) => !this.hasUser(user.userId)
    );
  },
  methods: {
    hasUser(userId) {
      return (
        this.currentList.filter((user) => user.userId === userId).length > 0
      );
    },
  },
};
</script>
