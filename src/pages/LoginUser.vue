<template>
  <div>
    <StaticEditName :name="userName" />
    <div><span>Email: </span>{{ userAddress }}</div>
    <div><span>Birth: </span>{{ dateOfBirth }}</div>
    <div><span>Password: </span>{{ password }}</div>
  </div>
</template>

<script>
import StaticEditName from "@/components/StaticEditName";
import { mapGetters } from "vuex";

export default {
  components: {
    StaticEditName,
  },
  computed: {
    ...mapGetters(["loginUserData"]),
    userName() {
      if (
        this.loginUserData &&
        this.loginUserData.firstName &&
        this.loginUserData.lastName
      ) {
        return this.loginUserData.firstName + " " + this.loginUserData.lastName;
      } else {
        return "";
      }
    },
    userAddress() {
      if (this.loginUserData && this.loginUserData.email) {
        return this.loginUserData.email;
      } else {
        return "";
      }
    },
    dateOfBirth() {
      if (this.loginUserData && this.loginUserData.dateOfBirth) {
        return this.loginUserData.dateOfBirth;
      } else {
        return "";
      }
    },
    password() {
      if (this.loginUserData && this.loginUserData.password) {
        return this.loginUserData.password;
      } else {
        return "";
      }
    },
  },
};
</script>
