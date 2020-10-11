<template>
  <!-- User account modal -->
  <b-modal
    :id="modalId"
    :title="title"
    :ref="'create-modal-' + modalId"
    @ok="(e) => this.$emit('onClickOk')"
    @show="beforeShow"
    hide-footer
  >
    <b-overlay :show="isLoading" rounded="sm">
      <slot />
      <b-button @click="hideModal">Cancel</b-button>
      <b-button class="btn-success" @click="onClickCreate">Create</b-button>
    </b-overlay>
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
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$refs["create-modal-" + this.modalId].hide();
    },
    onClickCreate() {
      this.$emit("onClickCreate");
    },
    beforeShow() {
      this.$emit("beforeShow");
    },
  },
};
</script>
