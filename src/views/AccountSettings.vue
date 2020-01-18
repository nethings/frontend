<template>
    <div class="container">
      <div class="level mt-15">
        <h1 class="title level-left">Account Settings</h1>
      </div>

        <div class="columns mt-4">
          <div class="column mr-4">
              <ChangePassword/>
          </div>
          <div class="column mr-4">
              <ChangeUserInfo/>
          </div>
        </div>

        <div class="columns mt-4">
              <div class="column mr-4">
                  <ChangeEmail/>
              </div>
              <div class="column mr-4">
                  <DeleteAccount/>
              </div>
        </div>

    </div>
</template>

<script>
import ChangePassword from "@/components/settings/ChangePassword.vue";
import ChangeEmail from "@/components/settings/ChangeEmail.vue";
import ChangeUserInfo from "@/components/settings/ChangeUserInfo.vue";
import DeleteAccount from "@/components/settings/DeleteAccount.vue";

export default {
    name:"AccountSettings",
    components: {
        ChangePassword,
        ChangeEmail,
        ChangeUserInfo,
        DeleteAccount
    },
}
</script>
