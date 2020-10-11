<template>
  <div>
    <b-overlay :show="isGameEditLoading" rounded="sm">
      <!-- User Name -->
      <StaticEditName :name="'Acme Games'" />

      <!-- Account form -->
      <GameForm />

      <!-- Edit button (Delete / Save) -->
      <EditButtonGroup
        @onClickSuccess="postGameEdit"
        @onClickDelete="deleteGame"
      />
    </b-overlay>

    <!-- Ownership game list related to the editing user account -->
    <div class="mt-5">
      <div class="mb-1"><span>Ownerships</span></div>
      <OwnershipList />
    </div>
  </div>
</template>

<script>
import OwnershipList from "@/components/OwnershipList";
import GameForm from "@/components/GameForm";
import EditButtonGroup from "@/components/EditButtonGroup";
import StaticEditName from "@/components/StaticEditName";

export default {
  components: {
    OwnershipList,
    GameForm,
    EditButtonGroup,
    StaticEditName,
  },
  data() {
    return {
      isGameEditLoading: false,
    };
  },
  methods: {
    postGameEdit() {},
    deleteGame() {},
  },
};
</script>
