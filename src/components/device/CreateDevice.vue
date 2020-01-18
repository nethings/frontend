<template>
    <form @submit.prevent="addDevice">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">New Device</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Label"
                    :type="{ 'is-danger': error }">
                    <b-input v-model="label" placeholder="Your device label" required>
                    </b-input>
                </b-field>
                {{response}}

            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close();">Close</button>
                <button type="submit" class="button is-primary">Add</button>
            </footer>
        </div>
    </form>
</template>

<script>

import { AUTH_REQUEST, AUTH_LOGIN} from '@/store/actions/auth'
import { apiService } from "@/common/api.service.js";

import { mapActions, mapGetters} from 'vuex'

export default {
    name: "CreateDevice",
    data() {
        return {
            label: null,
            response: '...'
        }
    },
    computed: mapGetters(['error']),
    methods: {
      addDevice() {
        let payload = {
          pins: {
            a: null
          },
          label: this.label,
        }
        console.log(payload)
        apiService('/api/devices/', 'POST', payload)
          .then(resp => {
            this.response = resp.id
            console.log(resp)
          //this.$router.push({ name: 'device', params: { id: resp.id } })
        //  this.$parent.close()

          })
      },

}
};
</script>
