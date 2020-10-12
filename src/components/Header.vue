<template>
  <header>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap shadow">
      <a
        class="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
        href="#"
        v-on:click.prevent="handlClickOnHeaderIcon"
        >Acme Games</a
      >

      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style="right:10px;"
        @click="(e) => this.$emit('onClickSideBarMenu')"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="navbar-nav px-3 d-md-block d-none"
        style="font-size: 1rem; color:white;"
        v-if="this.hasAdminData || this.hasLoginUserData"
      >
        <b-icon icon="person-fill"></b-icon>
        <b-dropdown
          id="dropdown-account"
          dropbottom
          :text="getName"
          variant="none"
          class="account-menu"
        >
          <b-dropdown-item href="#" v-on:click.prevent="handleClickOnAccount"
            >Sign Out</b-dropdown-item
          >
        </b-dropdown>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "hasAdminData",
      "adminData",
      "hasLoginUserData",
      "loginUserData",
    ]),
    getName() {
      if (this.hasAdminData) return this.adminData.firstName;
      else if (this.hasLoginUserData) return this.loginUserData.firstName;
      else return "";
    },
  },
  methods: {
    handlClickOnHeaderIcon(event) {
      if (this.hasAdminData) {
        if (this.hasAdminData) {
          const path = `/${this.adminData.userId}/dashboard`;
          if (this.$route && this.$route.path !== path) this.$router.push(path);
        } else {
          const path = "/";
          if (this.$route && this.$route.path !== path)
            this.$router.replace("/");
        }
      }
    },
    handleClickOnAccount(event) {
      // NOTE: Reset admin data
      this.setAdminData({});
      this.setLoginUserData({});

      // NOTE: Go to top page (login view)
      this.$router.replace("/");
    },
    ...mapActions(["setAdminData", "setLoginUserData"]),
  },
};
</script>

<style lang="scss">
.account-menu {
  color: white;
  button {
    color: white;
    padding: 0;
    background: none;
    border: none;
  }
  button:hover {
    background: none;
    color: black;
  }
}
</style>
