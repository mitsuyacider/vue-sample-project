<template>
  <div>
    <StaticEditName :name="userName" />
    <div><span>Email: </span>{{ userAddress }}</div>
    <div><span>Birth: </span>{{ dateOfBirth }}</div>
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
      if (
        this.adminData &&
        this.adminData.firstName &&
        this.adminData.lastName
      ) {
        return this.adminData.firstName + " " + this.adminData.lastName;
      } else {
        return "";
      }
    },
    userAddress() {
      if (this.adminData && this.adminData.email) {
        return this.adminData.email;
      } else {
        return "";
      }
    },
    dateOfBirth() {
      if (this.adminData && this.adminData.dateOfBirth) {
        return this.adminData.dateOfBirth;
      } else {
        return "";
      }
    },
  },
};
</script>
