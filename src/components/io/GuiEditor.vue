<template>
<div class="card">
  <div class="card-content">
    <p class="title is-4 has-text-grey-darker">Graphic User Interface</p>


    <form @submit.prevent="save">
      <div class="columns is-desktop">

        <!--b-field class="column is-6" label="Label">
          <b-input v-model="label" placeholder="Your device label" required>
          </b-input>
        </b-field-->

        <b-field required class="column" label="Field">
          <b-field>
            <b-radio-button v-model="field" name="name" native-value="data">
              Data
            </b-radio-button>
            <b-radio-button v-model="field" name="name" native-value="switch">
              Switch
            </b-radio-button>
            <b-radio-button v-model="field" name="name" native-value="slider">
              Slider
            </b-radio-button>
          </b-field>
        </b-field>
      </div>

      <div v-if="field=='slider'" class="columns is-desktop">
        <b-field class="column is-6" label="Min">
          <b-input v-model="min" type="number"></b-input>
        </b-field>

        <b-field class="column is-6" label="Max">
          <b-input v-model="max" type="number"></b-input>
        </b-field>
      </div>

      <div v-if="field=='data' || field=='slider'" class="columns is-desktop">
        <b-field class="column is-6" label="Prefix">
          <b-input v-model="prefix"></b-input>
        </b-field>

        <b-field class="column is-6" label="Suffix">
          <b-input v-model="suffix"></b-input>
        </b-field>
      </div>

      <button type="submit" class="button is-primary mt-8">Save</button>
    </form>

  </div>

</div>
</template>

<script>
import {
  apiService
} from "@/common/api.service.js";

export default {
  name: "GuiEditor",

  data() {
    return {
      label: this.io.label || "",
      field: this.io.gui.field || "",
      min: this.io.gui.min || 0,
      max: this.io.gui.max || 1, 
      prefix: this.io.gui.prefix || "",
      suffix: this.io.gui.suffix || "",
      error: ""
    }
  },
  props: {
    deviceId: {
      type: Number,
      required: false
    },
    io: {
      type: Object,
      required: false,
      default: false
    }
  },
    watch: {
      'field': function(val) {
        this.min = 0;
        this.max = 1;
        this.prefix = "";
        this.suffix = "";
      }
    },
    methods: {
      /*
      deleteIO(){
        var endpoint = `/api/devices/${this.deviceId}/io/${this.IO.id}/`;
        var method = `DELETE`;
        apiService(endpoint, method)
        this.$emit('delete')
        this.$parent.close()
      },
*/
      save() {
        var payload = {
          "field": this.field,
          "min": this.min,
          "max": this.max,
          "prefix": this.prefix,
          "suffix": this.suffix,
        };

        var endpoint = `/api/io/${this.io.id}/gui/`;
        var method = `PUT`;

        apiService(endpoint, method, payload)
          .then(resp => {
            console.log(resp)
          })
        }
    },
  };

  </script>
