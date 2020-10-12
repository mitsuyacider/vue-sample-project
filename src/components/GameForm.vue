<template>
  <BaseForm enctype="multipart/form-data">
    <div class="mb-3">
      <label for="gameName">Game Name</label>
      <input
        type="text"
        class="form-control"
        :class="{
          'is-invalid': this.errors.filter((e) => e.gameName).length > 0,
        }"
        id="gameName"
        placeholder="Game Name Here"
        v-model="game.gameName"
        required="true"
      />
      <div class="invalid-feedback">
        {{ getErrorMessage("gameName", this.errors) }}
      </div>
    </div>
    <div class="mb-3">
      <label for="ageRestriction">Age Restriction</label>
      <input
        type="number"
        class="form-control"
        :class="{
          'is-invalid': this.errors.filter((e) => e.ageRestriction).length > 0,
        }"
        id="ageRestriction"
        placeholder="Age Ristriction Number"
        v-model="game.ageRestriction"
        required="true"
        min="0"
        max="99"
      />
      <div class="invalid-feedback">
        {{ getErrorMessage("ageRestriction", this.errors) }}
      </div>
      <div class="mb-3 mt-4">
        <label
          class="position-relative thumbnail-label"
          :class="{
            dot: !game.thumbnail,
          }"
          for="thumbnail"
        >
          <span v-if="!game.thumbnail" class="thumbnail-text"
            >Choose Thumbnail</span
          >

          <!-- Only allow jpg and png file -->
          <input
            type="file"
            class="form-control-file d-none"
            :class="{
              'is-invalid': this.errors.filter((e) => e.thumbnail).length > 0,
            }"
            id="thumbnail"
            accept="image/x-png,image/jpeg"
            @change="handleFileChange"
            required="true"
            multiple
          />
          <div class="invalid-feedback">
            {{ getErrorMessage("thumbnail", this.errors) }}
          </div>
          <img
            v-show="game.thumbnail"
            :src="game.thumbnail"
            alt="thumbnail"
            data-thumbnail
            ref="gameThumbnail"
          />
        </label>
      </div>
    </div>
  </BaseForm>
</template>

<script>
import BaseForm from "@/components/BaseForm";
import { getErrorMessage } from "@/js/utils/Validation";

export default {
  components: {
    BaseForm,
  },
  props: {
    game: {
      type: Object,
      value: "",
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    getErrorMessage,
    handleFileChange(e) {
      const fileData = e.target.files[0];
      const elmThumbnail = this.$refs.gameThumbnail;

      const fr = new FileReader();
      const self = this;
      fr.onload = function() {
        elmThumbnail.src = fr.result;
        self.game.thumbnail = fr.result;
      };
      fr.readAsDataURL(fileData);
    },
  },
};
</script>

<style lang="scss" scoped>
.thumbnail-label {
  width: 180px;
  height: 120px;
}

.dot {
  border-style: dotted;
}

.thumbnail-text {
  position: absolute;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  top: 50%;
}
</style>
