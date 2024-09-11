<template>
    <form @submit.prevent="searchItunes(searchText)" id="form">
        <input type="text" name="search" id="search" v-model="searchText">
        <button type="submit" @click="searchItunes(searchText)" class="search-btn">Search</button>
    </form>
    <div class="loader" v-if="loading"></div>
    <div v-if="albums.results">
        <h2 class="results-header">Showing results for {{ searchText }} Albums ({{ albums.resultCount }})</h2>
        <div v-for="album in albumList" class="albums">
            <p>Artist: {{ album.artistName }}</p>
            <p>Album: {{ album.collectionCensoredName }}</p>
            <a :href="album.artistViewUrl" target="_blank" >View Artist</a> <br>
            <a :href="album.collectionViewUrl" target="_blank">View Album</a>
            <img :src="album.artworkUrl100" alt="artworkUrl100">
            <p>Released on:{{ album.releaseDate}}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { ItunesType, Result } from '../types/types.ts'

const searchText = ref('');
let albumList = reactive([]) as unknown as Result[]
let albums = reactive({}) as ItunesType
let loading = ref(false)


async function searchItunes(search: string) : Promise<void>{
    loading.value = true
    try {
        let response = await fetch(`http://itunes.apple.com/search?term=${searchText.value}&entity=album&attribute=allArtistTerm`)
        albums = await response.json()
        console.log(albumList)
        albumList = await albums.results
    } catch (err) {
        console.log(err, 'an error occured')
    } finally { 
        loading.value = false;
        searchText.value = '';
    }
}
</script>

<style scoped>
p, h1, h2, h3 {
    margin-top: 0;
}
#form {
    border: 1px solid grey;
    padding: 1rem;
    display: flex;
    gap: 20px;
    background-color: #FF7A59;
    margin-bottom: 1rem
}
#search {
    padding: 1rem;
    font-size: 1rem;
    width: 80%;
    border-radius: 50px;
    border: 2px solid grey;
    background-color: transparent;

    &:is(:hover, :focus) {
        border-color: blue;
    }
}
.search-btn {
    border: 2px solid grey;
    border-radius: 40px;
    cursor: pointer;
    display: flex;
    place-items: center;
    align-items: center;
}
.results-header {
    font-size: 0.85rem;
    font-weight: 600;
    color: rgb(69, 71, 73);
}
.albums {
    border: 1px solid grey;
    padding: 1rem;
}
.loader {
  margin: 2rem auto;
  border: 8px solid #EAF0F6;
  border-radius: 50%;
  border-top: 8px solid #FF7A59;
  border-bottom: 8px solid #FF7A59;
  width: 20px;
  height: 20px;
  animation: spinner 4s linear infinite;
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>