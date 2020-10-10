<template>
  <BaseListRow>
    <tr>
      <td>{{ user.userId }}</td>
      <td>{{ user.firstName }}</td>
      <td>0</td>
      <td>{{ user.email }}</td>
      <td>
        <b-icon icon="trash" v-on:click="onClickTrash"></b-icon>
        <router-link to="/123/users/abc/edit"
          ><b-icon icon="pencil-square"></b-icon
        ></router-link>
      </td>
    </tr>
  </BaseListRow>
</template>

<script>
import BaseListRow from "@/components/BaseListRow";
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
