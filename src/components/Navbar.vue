<template>
  <b-navbar type="is-primary">
    <!--class="has-shadow"-->
    <template class="navbar-brand" slot="brand">
      <b-navbar-item tag="router-link" :to="{ name: 'home' }" class="navbar-brand">
        <img class="mt-4 mr-3" :src="require('@/assets/raspberry-pi-logo.png')" />
        Raspinet
      </b-navbar-item>
    </template>
    <template slot="start"></template>

    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ name: 'home' }" :active="location=='/'" >Home</b-navbar-item>

      <b-navbar-item href="#">Downloads</b-navbar-item>

      <b-navbar-item href="#">Documentation</b-navbar-item>

      <b-navbar-item href="#">Blog</b-navbar-item>

      <div class="mt-4 mr-4" v-if="isAuthenticated">
        <UserMenu />
      </div>

      <div class="buttons ml-4 mr-4" v-else>
        <b-button type="is-primary" inverted outlined @click="showRegistration()">Sign up</b-button>
        <b-button type="is-primary" inverted @click="showLogin()">Login</b-button>
      </div>
    </template>
  </b-navbar>
</template>

<script>
import { ModalProgrammatic as Modal } from "buefy";
import LoginForm from "../components/Login.vue";
import RegistrationForm from "../components/Registration.vue";
import UserMenu from "../components/UserMenu.vue";
import { mapGetters, mapActions, mapState } from "vuex";
import { AUTH_LOGOUT, AUTH_REQUEST } from "@/store/actions/auth";

export default {
  name: "NavbarComponent",

  components: {
    LoginForm,
    RegistrationForm,
    UserMenu
  },
  data() {
    return {
      location: window.location.pathname
    };
  },
  watch: {
    $route(to) {
      this.location = to.path;
    }
  },

  computed: {
    ...mapGetters([
      "getProfile",
      "isAuthenticated",
      "isProfileLoaded",
      "authStatus",
      "test"
    ]),
    ...mapState({
      token: state => state.auth.token,
      authLoading: state => state.auth.status === "loading",
      name: state => `${state.user.profile.title} ${state.user.profile.name}`
    })
  },
  methods: {
    showLogin() {
      Modal.open({
        component: LoginForm,
        parent: this,
        width: 720
      });
    },
    showRegistration() {
      Modal.open({
        component: RegistrationForm,
        parent: this,
        width: 720
      });
    },
    logout() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style lang="css">
.my-navbar {
  border-bottom: 1px solid #ddd;
}

.navbar-brand {
  font-size: 160%;
  color: #fff !important;
}

.navbar-brand:hover {
  color: rgb(0, 240, 180) !important;
}
</style>
