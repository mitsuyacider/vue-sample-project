<template>
  <div class="col-8" style="margin:0 auto;">
    <b-overlay :show="isUserEditLoading" rounded="sm">
      <!-- User Name -->
      <StaticEditName :name="getName()" />

      <!-- Account form -->
      <UserAccountForm :user="user" :errors="errors" />
    </b-overlay>

    <!-- Ownership game list related to the editing user account -->
    <div class="mt-5" v-if="this['game/gameList'].length > 0">
      <div class="mb-1"><span>Ownership of Games</span></div>
      <OwnershipList
        :ownerships="ownerships"
        :isLoading="isOwnershipLoading"
        v-if="ownerships.length > 0"
      />

      <!-- There is no ownership data -->
      <div v-else>
        There is no game available.
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
  components: {
    OwnershipList,
    UserAccountForm,
    EditButtonGroup,
    StaticEditName,
  },
  computed: {
    ...mapGetters(["game/gameList", "loginUserData"]),
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
  mounted() {
    const userId = this.loginUserData.userId;
    const userInfo = store.getters["user/getUserById"](userId);
    const mockUser = { userInfo };

    const ownerships = store.getters["ownership/getOwnershipListByUserId"](
      userId
    );
    const mergedOwnership = ownerships.map((ownership) => {
      const game = store.getters["game/getGameById"](ownership.gameId);
      ownership.game = game;
      return ownership;
    });

    const mockOwnershipList = {
      ownerships: mergedOwnership,
    };
    const mergedMock = Object.assign(mockUser, mockOwnershipList);
    this.setData(null, mergedMock);
  },
  methods: {
    titleCase,
    ...mapActions([
      "user/getAllUser",
      "user/postUserEdit",
      "user/deleteUser",
      "ownership/deleteOwnership",
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
  },
};
</script>
