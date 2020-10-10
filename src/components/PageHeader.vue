<template>
  <div class="row mt-4">
    <div class="col-md-8 mb-3">
      <h2>{{ this.title }}</h2>
    </div>
    <div class="col-md-4 mb-3" v-if="hasNewButton">
      <b-button v-b-modal="triggerId" class="btn btn-success">New</b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      value: "",
    },
    triggerId: {
      type: String,
      value: "",
    },
    hasNewButton: {
      type: Boolean,
      value: true,
      default: true,
    },
  },
};
</script>
