<template>
  <BaseListRow>
    <tr>
      <td>{{ rowData.gameId }}</td>
      <td>
        <div class="d-flex align-items-center">
          <img
            v-if="rowData.thumbnail !== ''"
            :src="rowData.thumbnail"
            alt="thumbnail"
            class="thumbnail"
          />
          <span class="ml-2">{{ rowData.gameName }}</span>
        </div>
      </td>
      <td>{{ rowData.ageRestriction }}</td>
      <td>
        <b-icon
          icon="trash"
          v-on:click="(e) => this.$emit('onClickTrash', this.rowData)"
        ></b-icon>
        <router-link
          :to="`/${this.$route.params.adminId}/games/${rowData.gameId}/edit`"
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

<style lang="scss" scoped>
.thumbnail {
  width: 80px;
  height: 60px;
}
</style>
