<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="wrap">
      <Header />
      <div v-if="isLoggedIn">
        <div class="row mr-0 ml-0">
          <SideMenu />
          <Main />
        </div>
      </div>
      <div class="main-container" v-else><Login /></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Login from "@/pages/Login";
import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";

export default {
  components: {
    Main,
    Login,
    Header,
    Footer,
    SideMenu,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    if (this.isLoggedIn) {
      const path = "/123/users/abc/edit";
      if (this.$route && this.$route.path !== path) this.$router.push(path);
    } else {
      const path = "/";
      if (this.$route && this.$route.path !== path) this.$router.replace("/");
    }
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  flex: 1;
}
</style>
