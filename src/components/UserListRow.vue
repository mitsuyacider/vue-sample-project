<template>
  <BaseListRow>
    <tr>
      <td>1,001</td>
      <td>Lorem</td>
      <td>ipsum</td>
      <td>dolor</td>
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
    title: {
      type: String,
      value: "",
    },
  },
};
</script>
