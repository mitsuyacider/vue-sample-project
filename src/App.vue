<template>
  <div>
    <Header />
    <div>
      <Main v-if="isLoggedIn" />
      <Login v-else />
    </div>
    <Footer />
  </div>
</template>

<script>
import Login from "@/pages/Login";
import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Main,
    Login,
    Header,
    Footer,
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
