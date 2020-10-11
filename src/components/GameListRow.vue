<template>
  <BaseListRow>
    <tr>
      <td>{{ rowData.gameId }}</td>
      <td>
        <div class="d-flex align-items-center">
          <img src="http://placehold.jp/24/cc9999/993333/80x50.png" alt="" />
          <span class="ml-2">{{ rowData.gameName }}</span>
        </div>
      </td>
      <td>{{ rowData.ageRestriction }}</td>
      <td>
        <b-icon icon="trash"></b-icon>
        <router-link
          :to="`/${this.$route.params.adminId}/users/${rowData.gameId}/edit`"
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
    rowData: {
      type: Object,
      value: {},
    },
  },
};
</script>
