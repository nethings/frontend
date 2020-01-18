<template>
    <form @submit.prevent="onSubmit">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Registration</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Username">
                    <b-input v-model="username" placeholder="Your username" required>
                    </b-input>
                </b-field>

                <b-field label="Email">
                    <b-input type="email" v-model="email" placeholder="Your email" required>
                    </b-input>
                </b-field>

                <b-field label="Password">
                    <b-input type="password" v-model="password1" password-reveal placeholder="Your password" required>
                    </b-input>
                </b-field>

                <b-field label="Confirm password">
                    <b-input type="password" v-model="password2" password-reveal placeholder="Repeat your password" required>
                    </b-input>
                </b-field>

                <b-checkbox>I agree to terms</b-checkbox>
            </section>

            {{error}}

            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button  type="submit" class="button is-primary">Sign up</button>
            </footer>
        </div>
    </form>
</template>
<script>
import {AUTH_REQUEST, AUTH_REGISTRATION} from '@/store/actions/auth'

import { mapActions, mapGetters} from 'vuex'

export default {
    name: "RegistrationForm",
    data() {
        return {
            username: null,
            email: null,
            password1: null,
            password2: null
        }
    },
    computed: mapGetters(['error']),
    methods: {
        ...mapActions([AUTH_REGISTRATION]),
        onSubmit() {

            let credentials = {
                username: this.username,
                email: this.email,
                password1: this.password1,
                password2: this.password2
            }

            this.AUTH_REGISTRATION(credentials).then(() => {
                    console.log("THEN")
                this.$router.push('/')
                this.$parent.close()
            })
        }
    },
}
</script>
