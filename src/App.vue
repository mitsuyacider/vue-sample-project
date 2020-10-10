<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="wrap">
      <Header />
      <div v-if="this.hasAdminData">
        <div class="row mr-0 ml-0">
          <SideMenu />
          <Main />
        </div>
      </div>
      <div v-else class="main-container"><Login /></div>
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
import { mapActions, mapState, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["hasAdminData", "adminData"]),
  },
  mounted() {
    if (this.hasAdminData) {
      const path = "/123/dashboard/";
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
