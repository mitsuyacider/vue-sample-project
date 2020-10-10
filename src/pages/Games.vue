<template>
  <div>
    <PageHeader :title="'Games'" :triggerId="triggerId" />
    <GameList />

    <!-- Create game modal -->
    <BaseModal :modalId="triggerId" :title="'Create Game'">
      <GameForm />
    </BaseModal>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import GameList from "@/components/GameList";
import BaseModal from "@/components/BaseModal";
import GameForm from "@/components/GameForm";

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
    };
  },
};
</script>
