<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="wrap">
      <Header @onClickSideBarMenu="handleOnClickSideBarMenu" />
      <div v-if="this.hasAdminData">
        <div class="row mr-0 ml-0">
          <SideMenu :isShowBarSideMenu="isShowBarSideMenu" />
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
import { mapGetters, mapActions } from "vuex";

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
      isShowBarSideMenu: false, // For mobile setting
    };
  },
  computed: {
    ...mapGetters(["hasAdminData", "adminData"]),
  },
  mounted() {
    if (this.hasAdminData && this.adminData && this.adminData.userId) {
      const path = `/${this.adminData.userId}/dashboard`;
      if (this.$route && this.$route.path !== path) this.$router.push(path);
    } else {
      const path = "/";
      if (this.$route && this.$route.path !== path) this.$router.replace("/");
    }

    this["user/getAllUser"]();
    this["game/getAllGame"]();
    this["ownership/getAllOwnership"]();
  },
  methods: {
    ...mapActions([
      "ownership/getAllOwnership",
      "user/getAllUser",
      "game/getAllGame",
    ]),
    handleOnClickSideBarMenu() {
      this.isShowBarSideMenu = !this.isShowBarSideMenu;
    },
  },
  watch: {
    $route(to, from) {
      this.isShowBarSideMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  flex: 1;
}
</style>
