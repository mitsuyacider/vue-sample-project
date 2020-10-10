<template>
  <BaseForm enctype="multipart/form-data">
    <div class="mb-3">
      <label for="game">Game Name</label>
      <input
        type="text"
        class="form-control"
        id="game"
        placeholder="Game Name Here"
        value=""
        required="true"
      />
      <div class="invalid-feedback">
        Please enter a valid game name.
      </div>
    </div>
    <div class="mb-3">
      <label for="age">Age Restriction</label>
      <input
        type="number"
        class="form-control"
        id="age"
        placeholder="Age Ristriction Number"
        value=""
        required="true"
        min="0"
        max="99"
      />
      <div class="invalid-feedback">
        Please enter a valid age restriction.
      </div>
      <div class="mb-3 mt-4">
        <label for="exampleFormControlFile1">Thumbnail</label>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
    </div>
  </BaseForm>
</template>

<script>
import BaseForm from "@/components/BaseForm";
export default {
  components: {
    BaseForm,
  },
};
</script>
