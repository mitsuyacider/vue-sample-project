<template>
  <li class="nav-item" :role="this.linkName" :aria-selected="isSelected">
    <router-link class="nav-link" :to="this.path">
      <slot />
      {{ this.linkName }}
      <span class="sr-only">(current)</span>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      value: "/",
    },
    linkName: {
      type: String,
      value: "Dashboard",
    },
  },
  computed: {
    isSelected() {
      if (this.$route) {
        const value = this.$route.name === this.linkName;
        return value.toString();
      } else {
        return "false";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-item[aria-selected="true"] {
  a {
    color: $textActiveColor;
  }
}

.nav-item[aria-selected="false"] {
  a {
    color: $textSecondaryColor;
  }

  &:hover {
    a {
      color: $textSecondaryHoverColor;
    }
  }
}
</style>
