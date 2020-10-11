<template>
  <div>
    <b-overlay :show="isUserEditLoading" rounded="sm">
      <!-- User Name -->
      <StaticEditName :name="getName()" />

      <!-- Account form -->
      <UserAccountForm :user="user" />

      <!-- Edit button (Delete / Save) -->
      <EditButtonGroup
        @onClickSuccess="postUserEdit"
        @onClickDelete="deleteUser"
      />
    </b-overlay>

    <!-- Ownership game list related to the editing user account -->
    <div class="mt-5">
      <div class="mb-1"><span>Ownership Games</span></div>
      <OwnershipList
        :ownerships="ownerships"
        :isLoading="isOwnershipLoading"
        @onClickTrash="deleteOwnership"
        @onChangeState="changeOwnershipState"
      />
    </div>
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
    const mockUser = {
      userInfo: {
        userId: to.params.userId,
        firstName: "Mitsuya",
        lastName: "Watanabe",
        password: "asdfafa",
        email: "mitsuya.watanabe85@gmail.com",
        dateOfBirth: "2020-08-06",
      },
    };

    const mockOwnershipUserList = {
      ownerships: [
        {
          ownershipId: "1",
          gameId: "1",
          userId: "1",
          state: "granted",
          registeredDate: "2020-08-06",
          gameName: "Acme Game",
        },
        {
          ownershipId: "2",
          gameId: "2",
          userId: "1",
          state: "granted",
          registeredDate: "2020-08-06",
          gameName: "Acme Game2",
        },
      ],
    };

    const mergedMock = Object.assign(mockUser, mockOwnershipUserList);

    next((vm) => vm.setData(null, mergedMock));
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
      ownerships: [],
      isOwnershipLoading: false,
      isUserEditLoading: false,
    };
  },
  mounted() {
    this["user/getAllUser"]();
  },
  methods: {
    ...mapActions([
      "user/getAllUser",
      "user/postUserEdit",
      "user/deleteUser",
      "ownership/deleteOwnership",
      "ownership/postOwnershipEdit",
    ]),
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
      this.user = data.userInfo;
      this.ownerships = data.ownerships;
    },
    postUserEdit() {
      this.isUserEditLoading = true;
      this["user/postUserEdit"](this.user)
        .then((e) => {
          this.isUserEditLoading = false;
        })
        .catch((err) => (this.isUserEditLoading = false));
    },
    deleteUser() {
      const isConfirmed = confirm(
        `Are you sure you want to delete ${this.user.firstName}?`
      );
      if (isConfirmed) {
        this["user/deleteUser"](this.user.userId).then((e) => {
          const adminId = this.$route.params.adminId;
          const nextPath = `/${adminId}/users`;
          this.$router.push(nextPath);
        });
      }
    },
    deleteOwnership(data) {
      const isConfirmed = confirm(
        `Are you sure you want to delete ownership of ${data.gameName}?`
      );
      if (isConfirmed) {
        this.isOwnershipLoading = true;
        this["ownership/deleteOwnership"](data.ownershipId)
          .then((e) => {
            const deleteOwnershipIndex = this.ownerships.findIndex(
              (ownership) => ownership.ownershipId === data.ownershipId
            );
            this.ownerships.splice(deleteOwnershipIndex, 1);
            this.isOwnershipLoading = false;
          })
          .catch((err) => (this.isOwnershipLoading = false));
      }
    },
    changeOwnershipState(data) {
      // NOTE: Update state
      this.isOwnershipLoading = true;
      this["ownership/deleteOwnership"](data.ownershipId)
        .then((e) => {
          // NOTE: Apply update state to the row data.
          const state = data.modified === "Grant" ? "granted" : "revoked";
          data.state = state;

          this.isOwnershipLoading = false;
        })
        .catch((err) => (this.isOwnershipLoading = false));
    },
  },
};
</script>
