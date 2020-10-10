<template>
  <div>
    <PageHeader :title="'Users'" :triggerId="triggerId" />
    <UserList />

    <!-- User account modal -->
    <BaseModal :modalId="triggerId" :title="'Create User'">
      <UserAccountForm />
    </BaseModal>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import UserList from "@/components/UserList";
import BaseModal from "@/components/BaseModal";
import UserAccountForm from "@/components/UserAccountForm";

export default {
  components: {
    PageHeader,
    UserList,
    BaseModal,
    UserAccountForm,
  },
  data() {
    return {
      triggerId: "user-account",
    };
  },
};
</script>
