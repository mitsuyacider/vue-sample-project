<template>
  <div>
    <Header />
    <div v-if="isLoggedIn">
      <div class="row mr-0 ml-0">
        <SideMenu />
        <Main />
      </div>
    </div>
    <div v-else><Login /></div>
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
      isLoggedIn: true,
    };
  },
  mounted() {
    if (this.isLoggedIn) {
      const path = "/123/users";
      if (this.$route && this.$route.path !== path) this.$router.push(path);
    } else {
      this.$router.replace("/");
    }
  },
};
</script>
