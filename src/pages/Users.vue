<template>
  <div>
    <PageHeader :title="'Users'" :triggerId="triggerId" />
    <UserList />

    <!-- User account modal -->
    <BaseModal
      :modalId="triggerId"
      :title="'Create User'"
      ref="userCreateModal"
      @onClickCreate="createUser"
    >
      <b-overlay :show="isCreateLoading" rounded="sm">
        <UserAccountForm :user="user" />
      </b-overlay>
    </BaseModal>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import UserList from "@/components/UserList";
import BaseModal from "@/components/BaseModal";
import UserAccountForm from "@/components/UserAccountForm";
import { mapActions } from "vuex";

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
      user: {
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        dateOfBirth: "",
      },
      isCreateLoading: false,
    };
  },
  methods: {
    ...mapActions(["user/createUser"]),
    createUser() {
      this.isCreateLoading = true;

      this["user/createUser"](this.user).then((e) => {
        this.isCreateLoading = false;
        this.$refs.userCreateModal.hideModal();
      });
    },
  },
};
</script>
