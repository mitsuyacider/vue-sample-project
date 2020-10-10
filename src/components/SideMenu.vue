<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="sidebar-sticky pt-3">
      <ul class="nav flex-column">
        <SideMenuItem :path="'/123/dashboard'" :linkName="'Dashboard'" />
        <SideMenuItem :path="'/123/users'" :linkName="'Users'" />
        <SideMenuItem :path="'/123/games'" :linkName="'Games'" />
        <SideMenuItem :path="'/123/settings'" :linkName="'Settings'" />
      </ul>
    </div>
  </nav>
</template>

<script>
import SideMenuItem from "@/components/SideMenuItem";
export default {
  components: {
    SideMenuItem,
  },
};
</script>

<style lang="scss" scoped>
nav {
  min-height: calc(100vh - #{$headerHeight} - #{$footerHeight});
}
</style>
