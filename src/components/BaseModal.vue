<template>
  <!-- User account modal -->
  <b-modal :id="modalId" :title="title">
    <slot />
  </b-modal>
</template>

<script>
export default {
  props: {
    modalId: {
      type: String,
      value: "",
    },
    title: {
      type: String,
      value: "",
    },
  },
};
</script>
