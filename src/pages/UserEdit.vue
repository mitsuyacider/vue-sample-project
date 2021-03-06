<template>
  <div>
    <b-overlay :show="isUserEditLoading" rounded="sm">
      <!-- User Name -->
      <StaticEditName :name="getName()" />

      <!-- Account form -->
      <UserAccountForm :user="user" :errors="errors" />

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

      <!-- There is no ownership data -->
      <div v-else>
        There is no ownership data for this user.
      </div>
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

import { titleCase } from "@/js/utils/Text";
import { checkAccountForm } from "@/js/utils/Validation";

export default {
  beforeRouteEnter(to, from, next) {
    const userId = to.params.userId;
    const userInfo = store.getters["user/getUserById"](userId);
    const mockUser = { userInfo };

    const ownerships = store.getters["ownership/getOwnershipListByUserId"](
      userId
    );
    const mergedOwnership = ownerships
      .filter((ownership) => {
        const game = store.getters["game/getGameById"](ownership.gameId);
        return game;
      })
      .map((ownership) => {
        const game = store.getters["game/getGameById"](ownership.gameId);
        ownership.game = game;
        return ownership;
      });

    const mockOwnershipList = {
      ownerships: mergedOwnership,
    };
    const mergedMock = Object.assign(mockUser, mockOwnershipList);

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
      errors: [],
    };
  },
  methods: {
    titleCase,
    ...mapActions([
      "user/getAllUser",
      "user/postUserEdit",
      "user/deleteUser",
      "ownership/deleteOwnership",
      "ownership/postOwnershipEdit",
    ]),
    getName() {
      if (!this.user) return "";
      // NOTE: Remove all white spaces in the input field
      const firstName = this.user.firstName.replace(/\s+/g, "");
      const lastName = this.user.lastName.replace(/\s+/g, "");
      const fullName = firstName + " " + lastName;

      // NOTE: Return fullname with title case
      return titleCase(fullName);
    },
    setData(err, data) {
      this.user = data.userInfo;
      this.ownerships = data.ownerships;
    },
    postUserEdit() {
      // NOTE: checkUserForm
      const [isValid, errors] = checkAccountForm(this.user);
      if (isValid) {
        this.isUserEditLoading = true;
        this["user/postUserEdit"](this.user)
          .then((e) => {
            this.isUserEditLoading = false;
            this.errors = [];
          })
          .catch((err) => {
            // NOTE: If email addres has already been registered, show an error message.
            this.errors = [
              { email: "This email address has been registered." },
            ];
            this.isUserEditLoading = false;
          });
      } else {
        this.errors = errors;
      }
    },
    deleteUser() {
      const isConfirmed = confirm(
        `Are you sure you want to delete ${this.user.firstName}?`
      );
      if (isConfirmed) {
        this.isUserEditLoading = true;
        this["user/deleteUser"](this.user.userId)
          .then((e) => {
            this.isUserEditLoading = false;
            const adminId = this.$route.params.adminId;
            const nextPath = `/${adminId}/users`;
            this.$router.push(nextPath);
          })
          .catch((err) => (this.isUserEditLoading = false));
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
          const state = data.modified === "Grant" ? "owned" : "revoked";
          data.state = state;

          this.isOwnershipLoading = false;
        })
        .catch((err) => (this.isOwnershipLoading = false));
    },
  },
};
</script>
