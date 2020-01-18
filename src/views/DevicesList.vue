<template>
<div class="container pb-250">

  <div class="level mt-15">
    <h1 class="title level-left">Devices</h1>
    <b-button class="level-right" type="is-success" @click="showCreateDevice" icon-left="plus">
      Create New Instance
    </b-button>
  </div>

  <b-table class="column card" :data="this.devices" :hoverable="true">
    <template  slot-scope="props">

      <b-table-column field="id" numeric label="ID">
        {{ props.row.id }}
      </b-table-column>

      <b-table-column field="label" label="Label" sortable>
        <router-link :to="{ name: 'device', params: { id: props.row.id } }" >
            {{ props.row.label }}
        </router-link>
      </b-table-column>

      <b-table-column field="topic" label="Topic">
        {{ props.row.topic }}
      </b-table-column>

      <b-table-column>
        <a class="delete" @click="deleteDevice(props.row.id)"></a>
      </b-table-column>


    </template>
  </b-table>


</div>
</template>

<script>
import { apiService } from "@/common/api.service.js";
import { ModalProgrammatic as Modal } from 'buefy'
import CreateDevice from "@/components/device/CreateDevice.vue";


export default {
  name: "Devices",
  data() {
    return {
      devices: [],
    }
  },
  components: {
      CreateDevice,
  },
  methods: {

    getDevices() {
      apiService('/api/devices/')
        .then(resp => {
          this.devices = resp
        })
    },

    deleteDevice: function(device_id) {
      this.devices.splice(this.devices.indexOf(device_id), 1)
      apiService(`/api/devices/${device_id}/`, 'DELETE')
    },

    showCreateDevice(){
        Modal.open({
          component: CreateDevice,
          parent: this,
          width: 720
      })
    },
  },
  created() {
    this.getDevices()
  }

};
</script>
