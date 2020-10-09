<template>
  <div>
    <PageHeader :title="'Games'" />
    <GameList />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import GameList from "@/components/GameList";
export default {
  components: {
    PageHeader,
    GameList,
  },
};
</script>
