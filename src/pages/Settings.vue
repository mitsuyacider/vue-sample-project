<template>
  <div>
    <StaticEditName :name="userName" />
    <div><span>Email: </span>{{ userAddress }}</div>
  </div>
</template>

<script>
import StaticEditName from "@/components/StaticEditName";
import UserAccountForm from "@/components/UserAccountForm";
import { mapGetters } from "vuex";

export default {
  components: {
    StaticEditName,
    UserAccountForm,
  },
  computed: {
    ...mapGetters(["adminData"]),
    userName() {
      const hasData =
        this.adminData && this.adminData.firstName && this.adminData.lastName;
      return hasData
        ? this.adminData.firstName + " " + this.adminData.lastName
        : "";
    },
    userAddress() {
      const hasData = this.adminData && this.adminData.email;
      return hasData ? this.adminData.email.toLowerCase() : "";
    },
  },
};
</script>
