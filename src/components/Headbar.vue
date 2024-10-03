<template>
    <header class="header">
        <h2>Vue + TypeScript Search API</h2>
        <p>Mini project by <a href="https://suleiman-hamza.github.io">_suleiman_hue</a>😍</p>
    </header>
</template>
<script lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style lang="css" scoped>
.header {
    text-align: center;
    color: #fefefe;
    padding: 0.75rem;
}
h2 {
    font-size: 1.25rem;
    margin-block: 0 0.75rem;
}
p {
    font-size: 0.85rem;
    font-style: italic;
    margin-block: 0;
}
p > a {
    text-decoration: none;
    color: chocolate;
    font-size: 1rem;
    font-weight: 700;
}
p > a:hover {
    text-decoration: underline;
    text-decoration-color: cornflowerblue;
}
</style>