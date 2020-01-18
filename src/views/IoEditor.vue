<template>
  <div class="container">
    <div class="level mt-15">
      <form class="level-left" @submit.prevent="save">
        
          
          <b-input v-model="this.io.label"></b-input>
          <button type="submit" class="button is-primary">Save</button>
      </form>

      <b-button class="level-right" type="is-primary" icon-left="arrow-left">Back</b-button>
    </div>

    <div class="columns mt-4">
      <div class="column mr-4">
        <GuiEditor :io="this.io" />
      </div>
      <div class="column mr-4">
        <GpioEditor :io="this.io" />
      </div>
    </div>
  </div>
</template>

<script>
import GuiEditor from "@/components/io/GuiEditor.vue";
import GpioEditor from "@/components/io/GpioEditor.vue";

import { apiService } from "@/common/api.service.js";

export default {
  name: "IoEditor",
  props: {
    ioId: {
      type: Number,
      required: true
    },
    io: {
      type: Object,
      required: false
    }
  },
  async beforeRouteEnter(to, from, next) {
    let endpoint = `/api/io/${to.params.ioId}/`;
    await apiService(endpoint).then(data => {
      to.params.io = data;
      console.log("@@@@@@@@");
      console.log(data);
    });
    return next();
  },
  components: {
    GuiEditor,
    GpioEditor
  }
};
</script>
