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
    <div class="mt-5" v-if="this['game/gameList'].length > 0">
      <div class="mb-1"><span>Ownership of Games</span></div>
      <OwnershipList
        :ownerships="ownerships"
        :isLoading="isOwnershipLoading"
        v-if="ownerships.length > 0"
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
import store from "@/store";
import { mapActions, mapGetters } from "vuex";

export default {
  beforeRouteEnter(to, from, next) {
    const userId = to.params.userId;
    const userInfo = store.getters["user/getUserById"](userId);
    const mockUser = { userInfo };

    const ownerships = store.getters["ownership/getOwnershipListByUserId"](
      userId
    );
    const mergedOwnership = ownerships.map((ownership) => {
      const user = store.getters["game/getGameById"](ownership.gameId);
      ownership.game = game;
      return ownership;
    });

    const mergedMock = Object.assign(mockUser, mergedOwnership);

    next((vm) => vm.setData(null, mergedMock));
  },
  components: {
    OwnershipList,
    UserAccountForm,
    EditButtonGroup,
    StaticEditName,
  },
  computed: {
    ...mapGetters(["game/gameList"]),
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
      this["ownership/postOwnershipEdit"](data)
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
