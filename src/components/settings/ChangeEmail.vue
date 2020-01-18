<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-4 has-text-grey-darker">Change Email</p>
      <form @submit.prevent="onSubmit">

        <b-field label="New Email">
            <b-input type="email" v-model="email" placeholder="Your new email" required>
            </b-input>
        </b-field>

        <b-field label="Confirm New Email">
            <b-input type="email" v-model="email" placeholder="Repet your new email" required>
            </b-input>
        </b-field>

        <button type="submit" class="button is-primary mt-8">Change Email</button>
      </form>

    </div>

  </div>


</template>

<script>

import {AUTH_REQUEST, AUTH_LOGIN} from '@/store/actions/auth'

import { mapActions, mapGetters} from 'vuex'

export default {
    name: "ChangeEmail",
    data() {
        return {
            username: null,
            password: null
        }
    },
    methods: {

        onSubmit() {
            apiService('/api/rest-auth/login/', 'POST', data)
            .then(resp => {
                a = 0;
            })
        }

    }
};

</script>
