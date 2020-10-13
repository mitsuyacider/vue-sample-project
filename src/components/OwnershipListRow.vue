<template>
  <BaseListRow>
    <tr>
      <!-- Game Name / User Name -->
      <td v-if="listType === 'user'">
        {{ rowData.user.firstName + " " + rowData.user.lastName }}
      </td>
      <td v-else>
        <div class="d-flex align-items-center">
          <img
            v-if="rowData.game.thumbnail !== ''"
            :src="rowData.game.thumbnail"
            alt="thumbnail"
            class="thumbnail"
          />
          <span class="ml-2">{{ rowData.game.gameName }}</span>
        </div>
      </td>

      <!-- State (Granted / Revoked) -->
      <td>
        <b-dropdown
          id="dropdown-dropright"
          dropright
          :text="rowData.state"
          class="valid-state"
        >
          <b-dropdown-item href="#" v-on:click.prevent="onChangeState"
            >Grant</b-dropdown-item
          >
          <b-dropdown-item href="#" v-on:click.prevent="onChangeState"
            >Revoke</b-dropdown-item
          >
        </b-dropdown>
      </td>

      <!-- Registered -->
      <td>{{ formatDate(rowData.registeredDate) }}</td>

      <!-- Edit button -->
      <td>
        <b-icon
          icon="trash"
          v-on:click="(e) => this.$emit('onClickTrash', this.rowData)"
        ></b-icon>
      </td>
    </tr>
  </BaseListRow>
</template>

<script>
import BaseListRow from "@/components/BaseListRow";
import { formatDate } from "@/js/utils/Text";

export default {
  components: {
    BaseListRow,
  },
  props: {
    rowData: {
      type: Object,
      value: {},
      default: function() {
        return {};
      },
    },
    index: {
      type: Number,
      value: 0,
    },
    listType: {
      type: String,
      default: "game",
    },
  },
  methods: {
    formatDate,
    onChangeState(e) {
      const index = this.index;
      const changeData = {
        modified: e.target.textContent,
        index,
      };
      const mergedData = Object.assign(this.rowData, changeData);
      this.$emit("onChangeState", mergedData);
    },
  },
};
</script>

<style lang="scss">
// NOTE: Override bootstrap style for Dropdown
.valid-state {
  button {
    color: black;
    padding: 0;
    background: none;
    border: none;
  }
  button:hover {
    background: none;
    color: black;
  }
}

.thumbnail {
  width: 80px;
  height: 60px;
}
</style>
