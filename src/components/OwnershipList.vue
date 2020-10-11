<template>
  <div>
    <b-overlay :show="isLoading" rounded="sm">
      <BaseListTable>
        <OwnershipListHeader />
        <OwnershipListRow
          v-for="(ownership, index) in this.ownerships"
          :key="ownership.ownershipId"
          :rowData="ownership"
          :index="index"
          @onClickTrash="handleOnClickTrash"
          @onChangeState="handleOnChangeState"
        />
      </BaseListTable>
      <Pagination />
    </b-overlay>
  </div>
</template>

<script>
import OwnershipListHeader from "@/components/OwnershipListHeader";
import OwnershipListRow from "@/components/OwnershipListRow";
import BaseListTable from "@/components/BaseListTable";
import Pagination from "@/components/Pagination";

export default {
  props: {
    ownerships: {
      type: Array,
      value: [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    OwnershipListHeader,
    OwnershipListRow,
    BaseListTable,
    Pagination,
  },
  methods: {
    handleOnClickTrash(data) {
      this.$emit("onClickTrash", data);
    },
    handleOnChangeState(data) {
      this.$emit("onChangeState", data);
    },
  },
};
</script>
