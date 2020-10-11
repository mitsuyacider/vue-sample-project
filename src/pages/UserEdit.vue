<template>
  <div>
    <!-- User Name -->
    <StaticEditName :name="getName()" />

    <!-- Account form -->
    <UserAccountForm :user="user" />

    <!-- Ownership game list related to the editing user account -->
    <div class="mt-5">
      <div class="mb-1"><span>Ownership Games</span></div>
      <OwnershipList />
    </div>

    <!-- Edit button (Delete / Save) -->
    <EditButtonGroup
      @onClickSuccess="postUserEdit"
      @onClickDelete="deleteUser"
    />
  </div>
</template>

<script>
import OwnershipList from "@/components/OwnershipList";
import UserAccountForm from "@/components/UserAccountForm";
import EditButtonGroup from "@/components/EditButtonGroup";
import StaticEditName from "@/components/StaticEditName";
import { mapActions, mapGetters } from "vuex";

export default {
  beforeRouteEnter(to, from, next) {
    const mock = {
      userId: to.params.userId,
      firstName: "Mitsuya",
      lastName: "Watanabe",
      password: "asdfafa",
      email: "mitsuya.watanabe85@gmail.com",
      dateOfBirth: "2020-08-06",
    };

    next((vm) => vm.setData(null, mock));
    // getPost(to.params.id, (err, post) => {
    //   next((vm) => vm.setData(err, post));
    // });
  },
  components: {
    OwnershipList,
    UserAccountForm,
    EditButtonGroup,
    StaticEditName,
  },
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
      },
      loading: false,
    };
  },
  mounted() {
    this["user/getAllUser"]();
  },
  methods: {
    ...mapActions(["user/getAllUser", "user/postUserEdit", "user/deleteUser"]),
    getName() {
      // NOTE: Remove all white spaces in the input field
      const firstName = this.user.firstName.replace(/\s+/g, "");
      const lastName = this.user.lastName.replace(/\s+/g, "");

      const fullName = firstName + " " + lastName;

      // NOTE: Return fullname with title case
      return this.titleCase(fullName);
    },
    titleCase(str) {
      return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },
    setData(err, data) {
      this.user = data;
    },
    postUserEdit() {
      this["user/postUserEdit"](this.user);
    },
    deleteUser() {
      const isConfirmed = confirm(
        `Are you sure you want to delete ${this.user.firstName}?`
      );
      if (isConfirmed) {
        this["user/deleteUser"](this.user.userId);
        const adminId = this.$route.params.adminId;
        const nextPath = `/${adminId}/users`;
        this.$router.push(nextPath);
      }
    },
  },
};
</script>
