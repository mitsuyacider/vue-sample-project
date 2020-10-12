<template>
  <div>
    <PageHeader :title="'Games'" :triggerId="triggerId" />
    <GameList />

    <!-- Create game modal -->
    <BaseModal
      :modalId="triggerId"
      :title="'Create New Game'"
      :isLoading="isCreateLoading"
      ref="gameCreateModal"
      @onClickCreate="createGame"
      @beforeShow="beforeModalShow"
    >
      <GameForm :game="game" :errors="errors" />
    </BaseModal>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import GameList from "@/components/GameList";
import BaseModal from "@/components/BaseModal";
import GameForm from "@/components/GameForm";
import { mapActions } from "vuex";

import { checkGameForm } from "@/js/utils/Validation";
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
      errors: [],
    };
  },
  methods: {
    ...mapActions(["game/createGame"]),
    createGame() {
      // NOTE: Check form data
      const [isValid, errors] = checkGameForm(this.game);

      if (isValid) {
        this.isCreateLoading = true;

        this["game/createGame"](this.game).then((e) => {
          this.isCreateLoading = false;
          this.$refs.gameCreateModal.hideModal();
        });
      } else {
        this.errors = errors;
      }
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
