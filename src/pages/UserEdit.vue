<template>
  <div>
    <!-- User Name -->
    <StaticEditName :name="'Mitsuya Watananbe'" />

    <!-- Account form -->
    <UserAccountForm />

    <!-- Ownership game list related to the editing user account -->
    <div class="mt-5">
      <div class="mb-1"><span>Ownership Games</span></div>
      <OwnershipList />
    </div>

    <!-- Edit button (Delete / Save) -->
    <EditButtonGroup />
  </div>
</template>

<script>
import OwnershipList from "@/components/OwnershipList";
import UserAccountForm from "@/components/UserAccountForm";
import EditButtonGroup from "@/components/EditButtonGroup";
import StaticEditName from "@/components/StaticEditName";
export default {
  components: {
    OwnershipList,
    UserAccountForm,
    EditButtonGroup,
    StaticEditName,
  },
};
</script>
