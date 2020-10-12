<template>
  <div class="d-flex justify-content-center form-container">
    <div class="col-md-4">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-bold">
          Welcome to Admin Interface for Acme Games!
        </h1>
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
    ...mapGetters(["defaultAdminData", "loginUserInfo"]),
  },
  methods: {
    ...mapActions([
      "setAdminData",
      "ownership/getAllOwnership",
      "user/getAllUser",
      "game/getAllGame",
    ]),
    handleSignIn(e) {
      e.preventDefault();

      // NOTE: Validate email and password
      const [isValid, errors] = this.checkLoginForm();

      if (isValid) {
        // NOTE: check if input user exists in database.
        const testAdmin = this.loginUserInfo(
          /** email = */ this.email,
          /** password = */ this.password
        );

        if (testAdmin) {
          const adminData = testAdmin;
          const path = `/${adminData.userId}/dashboard`;
          this.$router.push(path);
          this.setAdminData(adminData);
          this["user/getAllUser"]();
          this["game/getAllGame"]();
          this["ownership/getAllOwnership"]();
        } else {
          this.isInvalidUser = true;
        }
      } else {
        this.isInvalidUser = true;
      }
    },
    checkLoginForm() {
      let isValid = false;
      let errors = [];

      if (!this.email) {
        errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        errors.push("Valid email required.");
      }

      if (!this.password) {
        errors.push("password required.");
      }

      if (errors.length === 0) isValid = true;

      return [isValid, errors];
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
