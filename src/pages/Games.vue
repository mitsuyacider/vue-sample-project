<template>
  <div>
    <PageHeader :title="'Games'" :triggerId="triggerId" />
    <GameList />

    <!-- Create game modal -->
    <BaseModal
      :modalId="triggerId"
      :title="'Create New Game'"
      ref="gameCreateModal"
      @onClickCreate="createGame"
      @beforeShow="beforeModalShow"
    >
      <b-overlay :show="isCreateLoading" rounded="sm">
        <GameForm :game="game" />
      </b-overlay>
    </BaseModal>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import GameList from "@/components/GameList";
import BaseModal from "@/components/BaseModal";
import GameForm from "@/components/GameForm";
import { mapActions } from "vuex";

export default {
  components: {
    PageHeader,
    GameList,
    BaseModal,
    GameForm,
  },
  data() {
    return {
      triggerId: "create-game",
      isCreateLoading: false,
      game: {
        gameName: "",
        ageRestriction: null,
        thumbnail: "",
      },
    };
  },
  methods: {
    ...mapActions(["game/createGame"]),
    createGame() {
      this.isCreateLoading = true;

      this["game/createGame"](this.game).then((e) => {
        this.isCreateLoading = false;
        this.$refs.gameCreateModal.hideModal();
      });
    },
    beforeModalShow() {
      // NOTE: Reset game data
      this.game = {
        gameName: "",
        ageRestriction: null,
        thumbnail: "",
      };
    },
  },
};
</script>
