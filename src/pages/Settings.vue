<template>
  <div>
    <StaticEditName :name="'Mitsuya Watanabe'" />
    <div><span>Email: </span>mitsuya.watanabe@gmail.com</div>
    <div><span>Birth: </span>06.08.1985</div>
  </div>
</template>

<script>
import StaticEditName from "@/components/StaticEditName";
import UserAccountForm from "@/components/UserAccountForm";

export default {
  components: {
    StaticEditName,
    UserAccountForm,
  },
};
</script>
