<template>
  <div>
    <div v-if="visible">
      <div>visible</div>
      <slot></slot>
      <div id="g1"></div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Group",
  props:{
    children: Array
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    hide() {
      this.$data.visible = false;
    },
    show() {
      this.$data.visible = true;
    }
  },
  mounted() {
    const g1 = this.$el.querySelector("#g1");
    for (let i = 0; i < this.children.length; i++){
      g1.appendChild(this.children[i].$el);
    }
    //this.visible = false;
  }
});
</script>
