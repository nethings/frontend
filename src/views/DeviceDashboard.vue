<template>
<div>
  <div class="columns is-desktop is-multiline m-10">
    <IOComponent v-for="io in ioList" :io="io" />
  </div>

</div>
</template>

<script>
import {
  apiService
} from "@/common/api.service.js";

//import GenericIOEditor from "@/components/device/GenericIOEditor.vue";
import IOComponent from "@/components/io/IO.vue";


export default {
  label: "Dashboard",
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
