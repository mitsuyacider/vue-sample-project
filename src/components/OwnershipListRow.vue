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
          <b-dropdown-item href="#" v-on:click.prevent="onChangeState"
            >Grant</b-dropdown-item
          >
          <b-dropdown-item href="#" v-on:click.prevent="onChangeState"
            >Invoke</b-dropdown-item
          >
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
    rowData: {
      type: Object,
      value: {},
    },
    index: {
      type: Number,
      value: 0,
    },
  },
  methods: {
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
</style>
