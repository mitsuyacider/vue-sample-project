<template>
  <div>
    <b-overlay :show="isGameEditLoading" rounded="sm">
      <!-- User Name -->
      <StaticEditName :name="game.gameName" />

      <!-- Account form -->
      <GameForm :game="game" />

      <!-- Edit button (Delete / Save) -->
      <EditButtonGroup
        @onClickSuccess="postGameEdit"
        @onClickDelete="deleteGame"
      />
    </b-overlay>

    <!-- Ownership game list related to the editing user account -->
    <div class="mt-5">
      <div class="mb-1"><span>Ownership Users</span></div>
      <OwnershipList
        :ownerships="ownerships"
        :listType="'user'"
        :isLoading="isOwnershipLoading"
        @onClickTrash="deleteOwnership"
        @onChangeState="changeOwnershipState"
      />
    </div>
  </div>
</template>

<script>
import OwnershipList from "@/components/OwnershipList";
import GameForm from "@/components/GameForm";
import EditButtonGroup from "@/components/EditButtonGroup";
import StaticEditName from "@/components/StaticEditName";
import { mapActions, mapGetters } from "vuex";

export default {
  beforeRouteEnter(to, from, next) {
    const mockGame = {
      gameInfo: {
        gameId: to.params.gameId,
        gameName: "Acme Game",
        ageRestriction: 18,
        thumbnail: "http://placehold.jp/24/cc9999/993333/80x50.png",
      },
    };

    const mockOwnershipGameList = {
      ownerships: [
        {
          ownershipId: "1",
          gameId: "1",
          userId: "1",
          state: "granted",
          registeredDate: "2020-08-06",
          userName: "Mitsuya Watanabe",
        },
        {
          ownershipId: "2",
          gameId: "1",
          userId: "2",
          state: "granted",
          registeredDate: "2020-08-06",
          userName: "Mitsuya Watanabe",
        },
      ],
    };

    const mergedMock = Object.assign(mockGame, mockOwnershipGameList);

    next((vm) => vm.setData(null, mergedMock));
    // getPost(to.params.id, (err, post) => {
    //   next((vm) => vm.setData(err, post));
    // });
  },
  components: {
    OwnershipList,
    GameForm,
    EditButtonGroup,
    StaticEditName,
  },
  data() {
    return {
      isGameEditLoading: false,
      isOwnershipLoading: false,
      game: {
        gameName: "",
      },
      ownerships: [],
    };
  },
  methods: {
    ...mapActions([
      "game/postGameEdit",
      "game/deleteGame",
      "ownership/deleteOwnership",
    ]),
    postGameEdit() {
      this.isGameEditLoading = true;

      this["game/postGameEdit"](this.game)
        .then((e) => (this.isGameEditLoading = false))
        .catch((err) => (this.isGameEditLoading = false));
      console.log("** post game edit ", this.game);
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
    changeOwnershipState() {},
  },
};
</script>
