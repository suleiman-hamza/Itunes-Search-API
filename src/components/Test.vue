<template>
    <h1>test page here</h1>
    <p>yoloi</p>
    <component :is="compo"></component>
</template>

<script lang="ts">
import { ref } from 'vue';
import CompA from './CompA.vue';
import CompB from './CompB.vue';

const compo = ref(CompA)
</script>