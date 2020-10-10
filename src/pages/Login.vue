<template>
  <div class="d-flex justify-content-center form-container">
    <div class="col-md-4">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Welcome to Acme Games!</h1>
      </div>
      <form class="form-signin">
        <div class="form-label-group mb-3">
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
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
            required=""
          />
        </div>

        <div class="invalid-feedback mb-3">
          Email or password is invalid.
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm";
export default {
  BaseForm,
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
  display: block;
}
</style>
