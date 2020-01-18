<template>
  <b-dropdown position="is-bottom-left" v-model="navigation" aria-role="menu">
  <a
      slot="trigger"
      role="button">

      <figure class="mr-10 mt-15 image is-32x32">
         <img class="is-rounded" src="https://www.gravatar.com/avatar/e798c373a8dea000eca8717886a48fe1?default=mm">
     </figure>
  </a>



  <b-dropdown-item custom aria-role="menuitem">
      Logged as <b>{{profile.username}}</b>
  </b-dropdown-item>
  <hr class="dropdown-divider">

  <b-dropdown-item value="devices" has-link aria-role="menuitem">
      <router-link :to="{ name: 'devices' }">
          <b-icon icon="raspberrypi"></b-icon>
          Devices
      </router-link>
  </b-dropdown-item>

  <b-dropdown-item value="settings" has-link aria-role="menuitem">
      <router-link :to="{ name: 'settings' }">
          <b-icon icon="settings-outline"></b-icon>
          Settings
      </router-link>
  </b-dropdown-item>

  <b-dropdown-item value="logout"  @click="logout()" aria-role="menuitem">
      <b-icon icon="logout"></b-icon>
      Logout
  </b-dropdown-item>





  </b-dropdown>
</template>

<script>
import { mapGetters,mapActions, mapState } from 'vuex'
import {AUTH_LOGOUT} from '@/store/actions/auth'

export default {
  name: "UserMenu",
  data() {
      return {
          navigation: ''
      }
  },
  computed: mapGetters({ profile: 'getProfile'}),
  methods: {

      logout() {
          this.$store.dispatch(AUTH_LOGOUT).then(() => {
              this.$router.push('/');

          })
      },

  },
}
</script>
