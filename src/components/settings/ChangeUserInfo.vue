<template>
<div class="card">
  <div class="card-content">
    <p class="title is-4 has-text-grey-darker">Change Info</p>
    <form @submit.prevent="onSubmit">

      <b-field label="Username">
          <b-input v-model="username" :placeholder="getProfile.username"/>
      </b-field>

      <b-field label="First Name">
          <b-input v-model="first_name" :placeholder="getProfile.first_name || 'Your Firt Name' " />
      </b-field>

      <b-field label="Last Name">
          <b-input v-model="last_name" :placeholder="getProfile.last_name || 'Your Last Name' "/>
      </b-field>

      <button type="submit" class="button is-primary mt-8">Change Info</button>
    </form>

  </div>

</div>
</template>

<script>
import {
  USER_REQUEST
} from '@/store/actions/user'

import {
  mapActions,
  mapGetters,
  mapState
} from 'vuex'
import {
  apiService
} from "@/common/api.service.js";

export default {
  name: "ChangeUserInfo",
  data() {
    return {
      username: null,
      first_name: null,
      last_name: null,
      response: null
    }
  },
  computed: mapGetters(['getProfile']),
  methods: {
    onSubmit() {
      let payload = {
        username: this.username || this.getProfile.username,
        first_name: this.first_name || this.getProfile.first_name,
        last_name: this.last_name || this.getProfile.last_name
      }
      apiService('/api/rest-auth/user/', 'PUT', payload)
        .then(resp => {
          console.log(resp)
          this.response = resp
          //this.$store.dispatch(USER_REQUEST)
        })
    }
  },

};
</script>
