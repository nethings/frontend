<template>
    <div class="card">
      <div class="card-content">
        <p class="title is-4 has-text-grey-darker">Delete Account</p>
        <p class="subtitle is-6">
            To be able to delete your account you have to makes sure you have no running instances and no unpaid invoices. You will receive a final invoice for any instance time not yet invoiced.
            Please note that removing a user on a team with other active users will not cancel any subscriptions, they will still be charged.
        </p>

        <form @submit.prevent="confirmCustomDelete">

          <button type="submit" class="button is-danger">Delete Account</button>
        </form>

      </div>

    </div>
</template>

<script>

import {AUTH_REQUEST, AUTH_LOGIN} from '@/store/actions/auth'

import { mapActions, mapGetters} from 'vuex'

export default {
    name: "DeleteAccount",
    data() {
        return {
            username: null,
            password: null
        }
    },
    computed: mapGetters(['error']),
    methods: {
        confirmCustomDelete() {
            this.$buefy.dialog.confirm({
                title: 'Deleting account',
                message: 'Are you sure you want to <b>delete</b> your account? This action cannot be undone.',
                confirmText: 'Delete Account',
                type: 'is-danger',
                hasIcon: true,
                //onConfirm: () => this.$buefy.toast.open('Account deleted!')
            })
        }

    }
};

</script>
