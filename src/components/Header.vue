<template>
  <header>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap shadow">
      <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/"
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
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="navbar-nav px-3 d-md-block d-none"
        style="font-size: 1rem; color:white;"
      >
        <b-icon icon="person-fill"></b-icon>
        <b-dropdown
          id="dropdown-account"
          dropbottom
          text="Mitsuya"
          variant="none"
          class="account-menu"
          no-caret
        >
          <b-dropdown-item href="/#/">Sign Out</b-dropdown-item>
        </b-dropdown>
      </div>
    </nav>
  </header>
</template>

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
