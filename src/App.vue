<script setup lang="ts">
import { ref } from 'vue';
import Itunes from './components/Itunes.vue'


</script>

<template>
  <header>
    <h2>Itunes Search Bar</h2>
  </header>
  <main>
    <Itunes />
  </main>
</template>

<style scoped>
header {
  text-align: center;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
