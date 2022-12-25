<script setup>
import { computed } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import store from "./store";
const test = computed(() => store.state.test);
</script>

<template>
    <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p class="text-3xl text-gray-700 font-bold mb-5">
        Welcome! {{ test }}
      </p>
      <p class="text-gray-500 text-lg">
        Vue and Tailwind CSS in action
      </p>
   </div>
 </template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
