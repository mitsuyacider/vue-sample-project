<template>
  <div>
    <h1>Acme Games</h1>

    <Main v-if="isLoggedIn" />
    <Login v-else />
  </div>
</template>

<script>
import Main from "@/components/Main";
import Login from "@/pages/Login";

export default {
  components: {
    Main,
    Login,
  },
  data() {
    return {
      isLoggedIn: true,
    };
  },
  mounted() {
    if (this.isLoggedIn) {
      const path = "/123/dashboard";
      if (this.$route.path !== path) this.$router.push(path);
    } else {
      this.$router.replace("/");
    }
  },
};
</script>
