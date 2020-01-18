<template lang="html">
    <b-menu>
        <b-menu-list label="Device">
            <b-menu-item
                tag="router-link"
                :to="{ name: 'dashboard' }"
                :active="location.match('dashboard') != null"
                label="Dashboard"
                icon="view-dashboard">
            </b-menu-item>

            <b-menu-item
              tag="router-link"
              :to="{ name: 'device-editor' }"
              :active="location.match('editor') != null"
              label="Edit"
              icon="code-braces">
            </b-menu-item>

            <b-menu-item
                label="Events"
                icon="swap-horizontal">
            </b-menu-item>

            <b-menu-item label="Cloud" icon="cloud"></b-menu-item>

            <b-menu-item label="Console" icon="console"></b-menu-item>

            <b-menu-item
                label="Settings"
                icon="settings">
            </b-menu-item>


        </b-menu-list>
      </b-menu>
</template>

<script>

import { apiService } from "../common/api.service.js";
import {AUTH_LOGOUT} from '@/store/actions/auth'
import { mapGetters,mapActions, mapState } from 'vuex'

export default {
    name: "MenuComponent",
    data() {
        return {
            location: window.location.pathname,
        }
    },
    watch:{
        $route (to){
            this.location = to.path;
        }
    },
    computed: {
        ...mapGetters({ profile: 'getProfile'}),
        ...mapState({
            token: state => state.auth.token,
          authLoading: state => state.auth.status === 'loading',
          name: state => `${state.user.profile.title} ${state.user.profile.name}`,
        }),

    },
    methods: {

        logout() {
            this.$store.dispatch(AUTH_LOGOUT).then(() => {
                this.$router.push('/');

            })
        },

    },
}
</script>

<style lang="css">

.menu-brand {
font-size: 300%;
color: #8c67ef !important;

}
 test {background-color: #92a8d1;}
</style>
