<template>
  <div class="d-flex justify-content-center form-container">
    <div class="col-md-4">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-bold">Welcome to Acme Games!</h1>
      </div>
      <BaseForm>
        <div class="form-label-group mb-3">
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            v-model="email"
            required=""
            autofocus=""
          />
        </div>

        <div class="form-label-group">
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            v-model="password"
            required=""
          />
        </div>

        <div class="invalid-feedback mb-3" :class="{ show: isInvalidUser }">
          Email or password is invalid.
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          @click="handleSignIn"
        >
          Sign in
        </button>
      </BaseForm>
    </div>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    BaseForm,
  },
  data() {
    return {
      email: "",
      password: "",
      isInvalidUser: false,
    };
  },
  computed: {
    ...mapGetters(["defaultAdminData"]),
  },
  methods: {
    ...mapActions(["setAdminData"]),
    handleSignIn(e) {
      e.preventDefault();

      // NOTE: Validate email and password
      this.errors = [];

      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      // NOTE: Temporaly validation for this assignment.
      if (this.email !== this.defaultAdminData.email) {
        this.errors.push("Valid email required.");
      }

      if (!this.password) {
        this.errors.push("password required.");
      }

      // NOTE: Temporaly validation for this assignment.
      if (this.password !== this.defaultAdminData.password) {
        this.errors.push("password required.");
      }

      if (this.errors.length > 0) {
        this.isInvalidUser = true;
      } else {
        const adminData = this.defaultAdminData;
        const path = `/${adminData.userId}/dashboard`;
        this.$router.push(path);
        this.setAdminData(this.defaultAdminData);
      }
    },
    validEmail: function(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  position: absolute;
  width: 100%;
  top: 50%;
  bottom: 0;
  transform: translate(0, -50%);
}

.invalid-feedback {
  display: none;
}

.invalid-feedback.show {
  display: block;
}
</style>
