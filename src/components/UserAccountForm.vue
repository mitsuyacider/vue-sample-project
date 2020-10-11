<template>
  <BaseForm>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="firstName">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="First Name"
          v-model="user.firstName"
          required=""
        />
        <div class="invalid-feedback">
          Valid first name is required.
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Last Name"
          v-model="user.lastName"
          required=""
        />
        <div class="invalid-feedback">
          Valid last name is required.
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="email">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="you@example.com"
        v-model="user.email"
        required=""
      />
      <div class="invalid-feedback">
        Please enter a valid email address.
      </div>
    </div>
    <div class="mb-3">
      <label for="birthday">Birthday</label>
      <input
        type="date"
        class="form-control"
        id="birthday"
        v-model="user.dateOfBirth"
        required=""
      />
      <div class="invalid-feedback">
        Please enter a valid birthday.
      </div>
    </div>
    <div class="mb-3">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
        v-model="user.password"
        required=""
      />
      <div class="invalid-feedback">
        Please enter a valid birthday.
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
    user: {
      type: Object,
      value: "",
    },
  },
};
</script>
