<template>
  <div>
    <!-- User Name -->
    <StaticEditName :name="'Mitsuya Watananbe'" />

    <!-- Account form -->
    <UserAccountForm :user="user" />

    <!-- Ownership game list related to the editing user account -->
    <div class="mt-5">
      <div class="mb-1"><span>Ownership Games</span></div>
      <OwnershipList />
    </div>

    <!-- Edit button (Delete / Save) -->
    <EditButtonGroup />
  </div>
</template>

<script>
import OwnershipList from "@/components/OwnershipList";
import UserAccountForm from "@/components/UserAccountForm";
import EditButtonGroup from "@/components/EditButtonGroup";
import StaticEditName from "@/components/StaticEditName";
export default {
  beforeRouteEnter(to, from, next) {
    console.log(to.params.userId);

    const mock = {
      userId: "1",
      firstName: "Mitsuya",
      lastName: "Watanabe",
      password: "asdfafa",
      email: "mitsuya.watanabe85@gmail.com",
      dateOfBirth: "2020-08-06",
    };

    next((vm) => vm.setData(null, mock));
    // getPost(to.params.id, (err, post) => {
    //   next((vm) => vm.setData(err, post));
    // });
  },
  components: {
    OwnershipList,
    UserAccountForm,
    EditButtonGroup,
    StaticEditName,
  },
  data() {
    return {
      user: {},
      loading: false,
    };
  },
  methods: {
    setData(err, data) {
      this.user = data;
    },
  },
};
</script>
