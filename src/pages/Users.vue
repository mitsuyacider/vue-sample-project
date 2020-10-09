<template>
  <div>
    <PageHeader />
    <router-link to="/123/users/abc/edit">Go to user edit</router-link>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  components: {
    PageHeader,
  },
};
</script>
