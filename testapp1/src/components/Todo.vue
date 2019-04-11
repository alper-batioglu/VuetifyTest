<template>
  <div>
      <h2>yep</h2>
    <input type="text" v-on:change="alper($event)" v-bind:value="todo.name">
    <slot/>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "todo-item",
  props: {
    todo: Object,
    status: Boolean
  },
  methods: {
    alper: function(param: any) {
      this.$emit("mychange", { x: 5 });
    },
  },
});
</script>