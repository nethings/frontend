<template>
<div id="dashboard">
  <div class="columns">


    <div class="column is-2 has-background-white-ter">
      <MenuComponent class="ml-10 mt-10 pb-500" />
    </div>
    <div class="column">
      <RouterView :id="this.id" />
    </div>
  </div>

</div>
</template>

<script>
/*
import MenuComponent from "../components/Menu.vue";
import {mapGetters, mapState} from 'vuex';
import LoginForm from "../components/Login.vue";
import { ModalProgrammatic as Modal } from 'buefy'
*/
import MenuComponent from "../components/Menu.vue";
import {
  apiService
} from "@/common/api.service.js";

export default {
  name: "DeviceLayout",
  data() {
    return {
      device: {},
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },

  components: {
    MenuComponent,
    //LoginForm,
  },
  //computed: mapGetters(['isAuthenticated']),
  methods: {
    getDevice() {
      apiService(`/api/devices/${this.id}/`)
        .then(resp => {
          this.device = resp
        })
    }
  },

    /*
    showLogin() {
      Modal.open({
        component: LoginForm,
        parent: this,
        width: 720
      })
    },*/
  created() {
    if (!this.isAuthenticated) {
      //this.showLogin()
    }
    this.getDevice()
  }

}
</script>
