<template>
<div class="card">
  <div class="card-content">
    <p class="title is-4 has-text-grey-darker">GPIO Instance</p>
    <form @submit.prevent="save">

      <div class="columns is-desktop">

        <b-field class="column is-7" label="Address (BCM)">
          <b-numberinput placeholder="Choose an address" v-model="this.address" min="0" max="27" />
        </b-field>

        <b-field class="column" label="Direction">
          <b-field>
            <b-radio-button v-model="this.direction" :native-value="1">
              Input
            </b-radio-button>
            <b-radio-button v-model="this.direction" :native-value="0">
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
import {
  apiService
} from "@/common/api.service.js";

export default {
  name: "GpioEditor",

  data() {
    return {
      address: this.io.gpio.address,
      direction: this.io.gpio.direction,
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
        //console.log("resp");
        this.address = null;
        this.direction = null;
        this.io.gpio = null;

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
