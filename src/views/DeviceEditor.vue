<template>
<div class="container pb-250">

  <div class="level mt-15">
    <h1 class="title level-left">Device Editor</h1>
    <b-button class="level-right" type="is-success" icon-left="plus">
      Create New Instance
    </b-button>
  </div>

  <b-table class="column" :data="this.ioList" :hoverable="true">
    <template slot-scope="props">

      <b-table-column label="row">
        {{ props.row }}
      </b-table-column>

      <b-table-column field="id" numeric label="ID">
        {{ props.row.id }}
      </b-table-column>

      <b-table-column field="label" label="Label" sortable>
        {{ props.row.label }}
      </b-table-column>

      <b-table-column field="gui" label="GUI">
        <p v-if="props.row.gui !== null">y</p>
        <p v-else>n</p>

      </b-table-column>

      <b-table-column>
        <router-link :to="{ name: 'io-editor', params: { ioId: props.row.id } }" >
          <b-icon class="ml-3" size="medium" icon="wrench" />
        </router-link>
      </b-table-column>

      <!--b-table-column field="id" numeric label="ID">
        {{ props.row.id }}
      </b-table-column>

      <b-table-column field="label" label="Label" sortable>
        {{ props.row.label }}
      </b-table-column>

      <b-table-column field="topic" label="Topic">
        {{ props.row.mqtt_topic }}
      </b-table-column>

      <b-table-column field="type" label="Type">
        {{ props.row.gui.field }}
      </b-table-column>

      <b-table-column field="gpio" label="GPIO">
        <div v-if="props.row.gpio">
          {{ props.row.gpio.address }}
        </div>
        <div v-else>None</div>
      </b-table-column>

      <b-table-column>
        <router-link :to="{ name: 'io-editor', params: { ioId: props.row.id } }" >
          <b-icon class="ml-3" size="medium" icon="wrench" />
        </router-link>
      </b-table-column-->


    </template>
  </b-table>


</div>
</template>

<script>
import {
  apiService
} from "@/common/api.service.js";

//import GenericIOEditor from "@/components/device/GenericIOEditor.vue";
import IOComponent from "@/components/io/IO.vue";


export default {
  label: "DeviceEditor",
  data() {
    return {
      response: 'null',
      ioList: [],
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  components: {
    //GenericIOEditor,
    IOComponent
  },

    methods: {
      getIoList() {
        apiService(`/api/devices/${this.id}/io/`)
          .then(resp => {
            console.log(resp)
            this.ioList = resp
          })
      },

    },
    created() {
      this.getIoList()
    }
  };

  </script>
