<template>
  <BaseListRow>
    <tr>
      <td>Game</td>
      <td>Acme Games</td>
      <td>18</td>
      <td>20</td>
      <td>
        <router-link to="/123/games/abc/edit"
          ><b-icon icon="trash"></b-icon
        ></router-link>
        <router-link to="/123/games/abc/edit"
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
