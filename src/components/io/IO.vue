<template>
<section class="card card-content m-10" :class="column">

      <div class="row">
        <div class="column">
          <div v-if="io.gui.field=='switch'">
            <b-switch size="is-large" @input="sendMessage()" :type="color" v-model="value" :true-value="1" :false-value="0" />
          </div>

          <div v-if="io.gui.field=='data'">
            <b-tag size="is-large">{{io.gui.prefix}} {{value}} {{io.gui.suffix}}</b-tag>
          </div>

          <div v-if="io.gui.field=='slider'">
            <b-slider size="is-large"
            :type="color"
            v-model="value"
            :min="io.gui.min"
            :max="io.gui.max"
            @change="sendMessage()"
            :custom-formatter="val => io.gui.prefix + val + io.gui.suffix"
            />
          </div>
        </div>
        <p class="column title is-4 has-text-grey-darker">{{io.label}}</p>
      </div>
</section>
</template>

<script>
import { ModalProgrammatic as Modal } from 'buefy'

export default {
  name: "IO",
  data() {
    return {
      value: 0,
      color: 'is-primary',
      column: ""
    }
  },
  props: {
    io: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: false
    },
  },
  computed: {
    pretty_type: function(){
      var str = this.io.type;
       str = str.replace("gpio", "GPIO");
       str = str.replace("custom", "Custom IO");
      return str
    }
  },
  methods: {
    /*
      showIOEditor(){
          Modal.open({
            component: IOEditor,
            props: {"IO": this.io, "id": this.id},
            events: {'save': obj => this.IO = obj, 'delete': this.destroyComponent},
            parent: this,
            width: 720
        })
    },
    destroyComponent(){
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },*/
    sendMessage(){
      console.log("SENDSENDSEND")
      this.$mqtt.publish(this.io.mqtt_topic, String(this.value));
    },
    onMessage(topic, payload, packet){
      if (topic == this.io.mqtt_topic && String(this.value) != payload){
        this.value = Number(payload);
      }
    }
  },
  created() {
    if(this.io.gui.field=='slider'){
      this.column = "column is-4";
    } else {
      this.column = "column is-3";
    }
    this.$mqtt.on('message', this.onMessage)
    this.$mqtt.subscribe(this.io.mqtt_topic);
  }
};
</script>
