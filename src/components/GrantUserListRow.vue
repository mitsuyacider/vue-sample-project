<template>
  <BaseListRow>
    <tr>
      <th>
        <input
          type="checkbox"
          aria-label="Checkbox for following text input"
          data-grant-user-checkbox
          :data-user-id="user.userId"
        />
      </th>
      <th>{{ user.userId }}</th>
      <th>{{ user.firstName + " " + user.lastName }}</th>
    </tr>
  </BaseListRow>
</template>

<script>
import BaseListRow from "@/components/BaseListRow";
import { mapGetters } from "vuex";

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
