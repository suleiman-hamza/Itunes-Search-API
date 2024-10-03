<script setup lang="ts">
import Headbar from './components/Headbar.vue';
import Itunes from './components/Itunes.vue'
</script>

<template>
  <main class="itunes-body">
    <Headbar />
    <Itunes />
  </main>
  <RouterView></RouterView>
</template>

<style scoped>
.itunes-body {
    /* border: 1px solid red; */
    display: grid;
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    background-color: rgb(18, 18, 18);
}

</style>
