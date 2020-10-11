<template>
  <BaseListRow>
    <tr>
      <!-- Game Name / User Name -->
      <td>{{ rowData.gameName }}</td>

      <!-- State (Granted / Invoked) -->
      <td>
        <b-dropdown
          id="dropdown-dropright"
          dropright
          :text="rowData.state"
          class="valid-state"
        >
          <b-dropdown-item href="#">Grant</b-dropdown-item>
          <b-dropdown-item href="#">Invoke</b-dropdown-item>
        </b-dropdown>
      </td>

      <!-- Registered -->
      <td>{{ rowData.registeredDate }}</td>

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
export default {
  components: {
    BaseListRow,
  },
  props: {
    title: {
      type: String,
      value: "",
    },
    rowData: {
      type: Object,
      value: {},
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
</style>
