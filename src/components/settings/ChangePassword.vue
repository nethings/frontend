<template>
<div class="card">
  <div class="card-content">
    <p class="title is-4 has-text-grey-darker">Change Password</p>
    <form @submit.prevent="onSubmit">

      <b-field label="Old Password">
        <b-input type="password" v-model="old_password" password-reveal placeholder="Your old password" required>
        </b-input>
      </b-field>

      <b-field label="New Password">
        <b-input type="password" v-model="new_password1" password-reveal placeholder="Your new password" required>
        </b-input>
      </b-field>

      <b-field label="Confirm New Password">
        <b-input type="password" v-model="new_password2" password-reveal placeholder="Repeat your new password" required>
        </b-input>
      </b-field>

      <button type="submit" class="button is-primary mt-8">Change Password</button>
    </form>

  </div>

</div>
</template>

<script>
import {
  apiService
} from "@/common/api.service.js";

export default {
  name: "ChangePassword",
  data() {
    return {
      old_password: null,
      new_password1: null,
      new_password2: null,
      response: null
    }
  },
  methods: {

    onSubmit() {
      let payload = {
        old_password: this.old_password,
        new_password1: this.new_password1,
        new_password2: this.new_password2
      }
      apiService('/api/rest-auth/password/change/', 'POST', payload)
        .then(resp => {
          this.response = resp
        })
    }

  }
};
</script>
