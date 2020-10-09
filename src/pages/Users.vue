<template>
  <div>
    <PageHeader :title="'Users'" />
    <UserList />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import UserList from "@/components/UserList";
export default {
  components: {
    PageHeader,
    UserList,
  },
};
</script>
