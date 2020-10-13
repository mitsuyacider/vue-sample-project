<template>
  <BaseForm>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="firstName">First Name</label>
        <input
          type="text"
          class="form-control"
          :class="{
            'is-invalid': this.errors.filter((e) => e.firstName).length > 0,
          }"
          id="firstName"
          placeholder="First Name"
          v-model="user.firstName"
          required=""
        />
        <div class="invalid-feedback was-validated">
          {{ getErrorMessage("firstName", this.errors) }}
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          class="form-control"
          :class="{
            'is-invalid': this.errors.filter((e) => e.lastName).length > 0,
          }"
          id="lastName"
          placeholder="Last Name"
          v-model="user.lastName"
          required=""
        />
        <div class="invalid-feedback">
          {{ getErrorMessage("lastName", this.errors) }}
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="email">Email</label>
      <input
        type="email"
        class="form-control"
        :class="{ 'is-invalid': this.errors.filter((e) => e.email).length > 0 }"
        id="email"
        placeholder="you@example.com"
        v-model="user.email"
        required=""
      />
      <div class="invalid-feedback">
        {{ getErrorMessage("email", this.errors) }}
      </div>
    </div>
    <div class="mb-3">
      <label for="datepicker">Choose a date</label>
      <b-form-datepicker
        id="datepicker"
        v-model="user.dateOfBirth"
        class="mb-2"
        required=""
      >
        <div class="invalid-feedback">
          {{ getErrorMessage("dateOfBirth", this.errors) }}
        </div>
      </b-form-datepicker>
    </div>
    <div class="mb-3">
      <label for="password">Password</label>
      <b-icon
        :icon="isShowPassword ? 'eye' : 'eye-slash'"
        style="cursor: pointer;"
        @click="(e) => (isShowPassword = !isShowPassword)"
      ></b-icon>
      <input
        :type="isShowPassword ? 'text' : 'password'"
        class="form-control"
        :class="{
          'is-invalid': this.errors.filter((e) => e.password).length > 0,
        }"
        id="password"
        placeholder="Password"
        v-model="user.password"
        required=""
      />
      <div class="invalid-feedback">
        {{ getErrorMessage("password", this.errors) }}
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
    user: {
      type: Object,
      value: "",
      default: function() {
        return {};
      },
    },
    errors: {
      type: Array,
      default: function() {
        return ["email"];
      },
    },
  },
  data() {
    return {
      isShowPassword: false,
    };
  },
  methods: {
    getErrorMessage,
  },
};
</script>

<style lang="scss">
form input[type="email"] {
  text-transform: lowercase;
}
</style>
