<template>
  <BaseForm enctype="multipart/form-data">
    <div class="mb-3">
      <label for="game">Game Name</label>
      <input
        type="text"
        class="form-control"
        id="game"
        placeholder="Game Name Here"
        v-model="game.gameName"
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
        v-model="game.ageRestriction"
        required="true"
        min="0"
        max="99"
      />
      <div class="invalid-feedback">
        Please enter a valid age restriction.
      </div>
      <div class="mb-3 mt-4">
        <label
          class="position-relative thumbnail-label"
          :class="{ dot: !game.thumbnail }"
          for="thumbnail"
        >
          <span v-if="!game.thumbnail" class="thumbnail-text"
            >Choose Thumbnail</span
          >

          <!-- Only allow jpg and png file -->
          <input
            type="file"
            class="form-control-file d-none"
            id="thumbnail"
            accept="image/x-png,image/jpeg"
            @change="handleFileChange"
            multiple
          />
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
export default {
  components: {
    BaseForm,
  },
  props: {
    game: {
      type: Object,
      value: "",
    },
  },

  methods: {
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
