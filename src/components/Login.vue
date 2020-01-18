<template>
    <form @submit.prevent="onSubmit">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Login</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Username"
                    :type="{ 'is-danger': error }">
                    <b-input v-model="username" placeholder="Your username" required>
                    </b-input>
                </b-field>

                <b-field label="Password"
                    :type="{ 'is-danger': error }">
                    <b-input type="password" password-reveal v-model="password"  placeholder="Your password" required>
                    </b-input>
                </b-field>

                <b-checkbox>Remember me</b-checkbox>
            </section>
            {{error}}
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close();">Close</button>
                <button type="submit" class="button is-primary">Login</button>
            </footer>
        </div>
    </form>
</template>

<script>

import { AUTH_REQUEST, AUTH_LOGIN} from '@/store/actions/auth'

import { mapActions, mapGetters} from 'vuex'

export default {
    name: "LoginForm",
    data() {
        return {
            username: null,
            password: null
        }
    },
    computed: mapGetters(['error']),
    methods: {
        ...mapActions([AUTH_LOGIN, AUTH_REQUEST]),
        onSubmit() {
                //this.$parent.close();
            let credentials = {
                username: this.username,
                password: this.password
            }
            //this.AUTH_REQUEST({type: AUTH_LOGIN, credentials}).then(() => {
            this.AUTH_LOGIN(credentials).then(() => {
            //this.$store.dispatch(AUTH_REQUEST, credentials).then(() => {
                //this.$router.push('/iot/dashboard')
                window.location.href = '/devices';
                this.$parent.close()
            })
        }
    },

};

</script>
