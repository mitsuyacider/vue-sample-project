<template>
  <BaseListRow>
    <tr>
      <td>{{ user.userId }}</td>
      <td>{{ user.firstName + " " + user.lastName }}</td>
      <td>{{ user.dateOfBirth }}</td>
      <td>{{ user.email.toLowerCase() }}</td>
      <td>
        <b-icon icon="trash" v-on:click="onClickTrash"></b-icon>
        <router-link :to="`/${adminData.userId}/users/${user.userId}/edit`"
          ><b-icon icon="pencil-square"></b-icon
        ></router-link>
      </td>
    </tr>
  </BaseListRow>
</template>

<script>
import BaseListRow from "@/components/BaseListRow";
import { mapGetters } from "vuex";

export default {
  components: {
    BaseListRow,
  },
  props: {
    user: {
      type: Object,
      value: "",
    },
  },
  computed: {
    ...mapGetters(["adminData"]),
  },
  methods: {
    onClickTrash() {
      const isConfirmed = confirm(
        `Are you sure you want to delete ${this.user.firstName}?`
      );

      if (isConfirmed) {
        this.$emit("onClickTrash", this.user);
      }
    },
  },
};
</script>
