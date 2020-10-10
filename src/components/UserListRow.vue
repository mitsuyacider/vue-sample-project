<template>
  <BaseListRow>
    <tr>
      <td>{{ user.userId }}</td>
      <td>{{ user.firstName }}</td>
      <td>0</td>
      <td>{{ user.email }}</td>
      <td>
        <router-link to="/123/users/abc/edit"
          ><b-icon icon="trash"></b-icon
        ></router-link>
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
};
</script>
