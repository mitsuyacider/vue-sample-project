<template>
  <div>
    <b-overlay :show="isGameEditLoading" rounded="sm">
      <!-- User Name -->
      <StaticEditName :name="game ? game.gameName : ''" />

      <!-- Account form -->
      <GameForm :game="game" :errors="errors" />

      <!-- Edit button (Delete / Save) -->
      <EditButtonGroup
        @onClickSuccess="postGameEdit"
        @onClickDelete="deleteGame"
      />
    </b-overlay>

    <!-- Ownership game list related to the editing user account -->
    <div class="mt-5" v-if="this['user/userList'].length > 0">
      <div class="row mt-4">
        <div class="col-md-8">
          <div class="mb-1"><span>Ownerships</span></div>
        </div>
        <div class="col-md-4 mb-1">
          <b-button v-b-modal="'game-ownership'" class="btn btn-success"
            >Add</b-button
          >
        </div>
      </div>

      <OwnershipList
        :ownerships="ownerships"
        :listType="'user'"
        :isLoading="isOwnershipLoading"
        v-if="ownerships.length > 0"
        @onClickTrash="deleteOwnership"
        @onChangeState="changeOwnershipState"
      />
      <div v-else>
        There is no ownership data. Let's grant ownership to users for this
        game!
      </div>
    </div>

    <!-- Ownership modal -->
    <BaseModal
      :modalId="'game-ownership'"
      :title="'Grant ownership to users'"
      :isLoading="isGrantModalLoading"
      ref="ownershipModal"
      @onClickCreate="grantOwnership"
    >
      <GrantUserList refs="grantUserList" :currentList="ownerships" />
    </BaseModal>
  </div>
</template>

<script>
// NOTE: Components
import OwnershipList from "@/components/OwnershipList";
import GameForm from "@/components/GameForm";
import EditButtonGroup from "@/components/EditButtonGroup";
import StaticEditName from "@/components/StaticEditName";
import BaseModal from "@/components/BaseModal";
import GrantUserList from "@/components/GrantUserList";

// NOTE: Store
import { mapActions, mapGetters } from "vuex";
import store from "@/store";

// NOTE: JavaScript
import { checkGameForm } from "@/js/utils/Validation";

export default {
  beforeRouteEnter(to, from, next) {
    const gameInfo = store.getters["game/getGameById"](to.params.gameId);
    const mockGame = { gameInfo };

    const ownerships = store.getters["ownership/getOwnershipListByGameId"](
      to.params.gameId
    );

    const mergedOwnership = ownerships.map((ownership) => {
      const user = store.getters["user/getUserById"](ownership.userId);
      ownership.user = user;
      return ownership;
    });

    const mockOwnershipGameList = {
      ownerships: mergedOwnership,
    };

    const mergedMock = Object.assign(mockGame, mockOwnershipGameList);

    next((vm) => vm.setData(null, mergedMock));
  },

  computed: {
    ...mapGetters(["user/userList"]),
  },
  components: {
    OwnershipList,
    GameForm,
    EditButtonGroup,
    StaticEditName,
    BaseModal,
    GrantUserList,
  },
  data() {
    return {
      isGameEditLoading: false,
      isOwnershipLoading: false,
      isGrantModalLoading: false,
      game: {
        gameName: "",
      },
      ownerships: [],
      errors: [],
    };
  },
  watch: {
    "$store.state.ownership.ownershipList": function(newVal, oldVal) {
      const gameId = this.$route.params.gameId;
      const gameInfo = store.getters["game/getGameById"](gameId);
      const mockGame = { gameInfo };

      const ownerships = newVal.filter(
        (ownership) => ownership.gameId === gameId
      );
      const mergedOwnership = ownerships.map((ownership) => {
        const user = store.getters["user/getUserById"](ownership.userId);
        ownership.user = user;
        return ownership;
      });

      this.ownerships = mergedOwnership;
    },
  },
  methods: {
    ...mapActions([
      "game/postGameEdit",
      "game/deleteGame",
      "ownership/deleteOwnership",
      "ownership/postOwnershipEdit",
      "ownership/addOwnerships",
    ]),
    postGameEdit() {
      const [isValid, errors] = checkGameForm(this.game);

      if (isValid) {
        this.isGameEditLoading = true;

        this["game/postGameEdit"](this.game)
          .then((e) => (this.isGameEditLoading = false))
          .catch((err) => (this.isGameEditLoading = false));
      } else {
        this.errors = errors;
      }
    },
    deleteGame() {
      const isConfirmed = confirm(
        `Are you sure you want to delete ${this.game.gameName}?`
      );
      if (isConfirmed) {
        this["game/deleteGame"](this.game.gameId).then((e) => {
          const adminId = this.$route.params.adminId;
          const nextPath = `/${adminId}/games`;
          this.$router.push(nextPath);
        });
      }
    },
    setData(err, data) {
      this.game = data.gameInfo;
      this.ownerships = data.ownerships;
    },
    deleteOwnership(data) {
      const isConfirmed = confirm(
        `Are you sure you want to delete ownership of ${data.userName}?`
      );
      if (isConfirmed) {
        this.isOwnershipLoading = true;
        this["ownership/deleteOwnership"](data.ownershipId)
          .then((e) => (this.isOwnershipLoading = false))
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
    grantOwnership() {
      // NOTE: Grab all checkbox
      const elmCheckbox = document.querySelectorAll(
        "[data-grant-user-checkbox]"
      );

      // NOTE: Extract cehcked user
      const userIds = [];
      elmCheckbox.forEach((elm) => {
        const id = elm.dataset.userId;

        if (elm.checked) {
          // NOTE: If checked users already exist in the ownership list,
          // remove them from post data
          const isChecked = (ownership) => ownership.userId === id;
          const hasUser = this.ownerships.filter(isChecked).length > 0;

          if (!hasUser) userIds.push(id);
        }
      });

      const data = {
        userIds,
        gameId: this.$route.params.gameId,
      };

      this.isGrantModalLoading = true;
      this["ownership/addOwnerships"](data).then((e) => {
        this.$refs.ownershipModal.hideModal();
        this.isGrantModalLoading = false;
      });
    },
  },
};
</script>
