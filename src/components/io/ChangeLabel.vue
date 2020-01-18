<template>
<div class="card">
  <div class="card-content">
    <p class="title is-4 has-text-grey-darker">GPIO Instance</p>
    <form @submit.prevent="save">

      <div class="columns is-desktop">

        <b-field class="column is-7" label="Address (BCM)">
          <b-numberinput placeholder="Choose an address" v-model="address" min="0" max="27" />
        </b-field>

        <b-field class="column" label="Direction">
          <b-field>
            <b-radio-button v-model="direction" :native-value="1">
              Input
            </b-radio-button>
            <b-radio-button v-model="direction" :native-value="0">
              Output
            </b-radio-button>
          </b-field>
        </b-field>

      </div>

      <button :disabled="!io.gpio" type="button" @click="this.delete" class="button is-danger mr-4 mt-8">Delete</button>
      <button type="submit" class="button is-primary ml-4 mt-8">Save</button>

    </form>

  </div>

</div>
</template>

<script>
import IO from "@/components/device/IO.vue";
import {
  apiService
} from "@/common/api.service.js";

export default {
  name: "GpioEditor",

  data() {
    return {
      address: this.io.gpio.address || null,
      direction: this.io.gpio.direction || null,
      error: ""
    }
  },
  props: {
    io: {
      type: Object,
      required: false,
      default: false
    }
  },

  methods: {
    delete(){
      var endpoint = `/api/io/${this.io.id}/gpio/`;
      var method = `DELETE`;
      apiService(endpoint, method)
      .then(resp => {
        console.log("resp");
        address = null;
        direction = null;

        console.log(resp);
      })


    },

    save() {
      console.log("SV")
      var payload = {
        "address": this.address,
        "direction": this.direction
      };
      var endpoint = `/api/io/${this.io.id}/gpio/`;
      var method = `PUT`;

      apiService(endpoint, method, payload)
      .then(resp => {
        console.log(resp);
        this.io.gpio = resp;
        console.log(this.io)
      })

    }
  },

  };

  </script>
