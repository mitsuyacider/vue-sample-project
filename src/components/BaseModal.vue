<template>
  <!-- User account modal -->
  <b-modal
    :id="modalId"
    :title="title"
    :ref="'create-modal-' + modalId"
    @ok="(e) => this.$emit('onClickOk')"
    hide-footer
  >
    <slot />
    <b-button @click="hideModal">Cancel</b-button>
    <b-button class="btn-success" @click="onClickCreate">Create</b-button>
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
  methods: {
    hideModal() {
      this.$refs["create-modal-" + this.modalId].hide();
    },
    onClickCreate() {
      this.$emit("onClickCreate");
    },
  },
};
</script>
