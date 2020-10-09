<template>
  <div class="row mt-4">
    <div class="col-md-8 mb-3">
      <h2>{{ this.title }}</h2>
    </div>
    <div class="col-md-4 mb-3">
      <button class="btn btn-success" type="button">New</button>
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
  },
};
</script>
