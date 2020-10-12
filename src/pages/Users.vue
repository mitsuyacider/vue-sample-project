<template>
  <div>
    <PageHeader :title="'Users'" :triggerId="triggerId" />
    <UserList />

    <!-- User account modal -->
    <BaseModal
      :modalId="triggerId"
      :title="'Create User'"
      :isLoading="isCreateLoading"
      ref="userCreateModal"
      @onClickCreate="createUser"
      @beforeShow="beforeModalShow"
    >
      <UserAccountForm :user="user" :errors="errors" />
    </BaseModal>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import UserList from "@/components/UserList";
import BaseModal from "@/components/BaseModal";
import UserAccountForm from "@/components/UserAccountForm";
import { mapActions } from "vuex";

import { checkAccountForm } from "@/js/utils/Validation";

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
      user: {},
      errors: [],
      isCreateLoading: false,
    };
  },
  methods: {
    ...mapActions(["user/createUser"]),
    createUser() {
      // NOTE: checkUserForm
      const [isValid, errors] = checkAccountForm(this.user);
      if (isValid) {
        this.isCreateLoading = true;

        this["user/createUser"](this.user).then((e) => {
          this.isCreateLoading = false;
          this.$refs.userCreateModal.hideModal();
        });
      } else {
        this.errors = errors;
      }
    },
    beforeModalShow() {
      // NOTE: Reset user data
      this.user = {
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        email: "",
        dateOfBirth: "",
      };
    },
  },
};
</script>
