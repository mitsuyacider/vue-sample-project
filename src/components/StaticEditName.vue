<template>
  <!-- User Name -->
  <div class="row mt-4">
    <div class="col-md-8 mb-3">
      <h2>{{ this.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      value: "",
    },
  },
};
</script>
