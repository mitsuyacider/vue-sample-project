<template>
  <div>
    <Header />
    <div>
      <Main v-if="isLoggedIn" />
      <Login v-else />
    </div>
  </div>
</template>

<script>
import Login from "@/pages/Login";
import Main from "@/components/Main";
import Header from "@/components/Header";

export default {
  components: {
    Main,
    Login,
    Header,
  },
  data() {
    return {
      isLoggedIn: true,
    };
  },
  mounted() {
    if (this.isLoggedIn) {
      const path = "/123/dashboard";
      if (this.$route && this.$route.path !== path) this.$router.push(path);
    } else {
      this.$router.replace("/");
    }
  },
};
</script>
