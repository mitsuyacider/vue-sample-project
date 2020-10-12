<template>
  <div>
    <b-overlay :show="isLoading" rounded="sm">
      <BaseListTable>
        <OwnershipListHeader />
        <!-- <OwnershipListRow
          v-for="(ownership, index) in this.ownerships"
          :key="ownership.ownershipId"
          :rowData="ownership"
          :index="index"
          :listType="listType"
          @onClickTrash="handleOnClickTrash"
          @onChangeState="handleOnChangeState"
        /> -->

        <OwnershipListRow
          v-for="(ownership, index) in ownershipList"
          :key="ownership.ownershipId"
          :rowData="ownership"
          :index="index"
          :listType="listType"
          @onClickTrash="handleOnClickTrash"
          @onChangeState="handleOnChangeState"
        />
      </BaseListTable>
      <Pagination
        v-if="pagerData.rows > pagerData.perPage"
        :pagerData="pagerData"
        @onChangePage="handleOnChangePage"
      />
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
    listType: {
      type: String,
      default: "game",
    },
  },
  computed: {
    pagerData() {
      return {
        rows: this.ownerships.length,
        perPage: 10,
      };
    },
    ownershipList() {
      const page = this.currentPage;
      const total = this.ownerships;
      const perPage = this.pagerData.perPage;
      const start = (page - 1) * perPage;
      const end = page * perPage;
      return total.slice(start, end);
    },
  },
  components: {
    OwnershipListHeader,
    OwnershipListRow,
    BaseListTable,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    handleOnClickTrash(data) {
      this.$emit("onClickTrash", data);
    },
    handleOnChangeState(data) {
      this.$emit("onChangeState", data);
    },
    handleOnChangePage(page) {
      this.currentPage = page;
    },
  },
};
</script>
