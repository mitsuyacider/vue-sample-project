<template>
  <div>
    <!-- User Name -->
    <StaticEditName :name="'Acme Games'" />

    <!-- Account form -->
    <GameForm />

    <!-- Ownership game list related to the editing user account -->
    <div class="mt-5">
      <div class="mb-1"><span>Ownerships</span></div>
      <OwnershipList />
    </div>

    <!-- Edit button (Delete / Save) -->
    <EditButtonGroup />
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
};
</script>
