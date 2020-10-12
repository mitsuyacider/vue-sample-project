<template>
  <div class="justify-content-center d-flex mt-2 mb-5">
    <b-pagination
      class="pagination-sm"
      v-model="currentPage"
      :total-rows="pagerData.rows"
      :per-page="pagerData.perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      @change="onChangePage"
    >
    </b-pagination>
  </div>
</template>

<script>
export default {
  props: {
    pagerData: {
      type: Object,
      default: function() {
        return {
          rows: 100,
          perPage: 5,
        };
      },
    },
  },
  methods: {
    onChangePage(page) {
      this.$emit("onChangePage", page);
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
};
</script>
