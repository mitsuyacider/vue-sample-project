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
        <router-link to="/123/users/abc/edit"
          ><b-icon icon="trash"></b-icon
        ></router-link>
        <!-- <router-link
          :to="`/${this.$route.params.adminId}/games/${rowData.gameId}/edit`"
          ><b-icon icon="pencil-square"></b-icon
        ></router-link> -->
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
