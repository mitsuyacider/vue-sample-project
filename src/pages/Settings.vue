<template>
  <div>
    <StaticEditName :name="adminData.firstName + ' ' + adminData.lastName" />
    <div><span>Email: </span>{{ adminData.email }}</div>
    <div><span>Birth: </span>{{ adminData.dateOfBirth }}</div>
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
  },
};
</script>
