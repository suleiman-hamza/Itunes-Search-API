<template>
    <section class="main">
        <form @submit.prevent="searchItunes(searchText)" id="form">
            <input type="search" name="search" id="search" v-model="searchText">
            <button type="submit" @click="searchItunes(searchText)" class="search-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="notif-icon">
                        <title>Notifications</title>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3" />
                </svg>
            </button>
        </form>
        <section class="result-display scroll-container">
            <div class="loader" v-if="loading"></div>
            <div v-if="albums.results">
                <h2 class="results-header">Showing results for {{ searchText }} Albums ({{ albums.resultCount }})</h2>
                <div class="albums" v-for="album in albumList">
                        <img :src="album.artworkUrl100" alt="artworkUrl100" width="80px" height="80px" class="artist-img">
                        <div class="artist-desc">
                            <div class="artist-name"><span>{{ album.artistName }}</span></div>
                            <div class="artist-album"><span>{{ album.collectionCensoredName }}</span></div>
                            <div class="view-artist">
                                <a :href="album.artistViewUrl" target="_blank" class="artist-url">View Artist</a><br>
                                <a :href="album.collectionViewUrl" target="_blank" class="album-url">View Album</a>
                            </div>
                            <div class="released">Released on:{{ album.releaseDate}}</div>
                        </div>
                    </div>
                </div>
            <div v-else class="placeholder">
                <div>
                    <h3>No search yettyyo</h3>
                    <!-- <div class="albums" v-for="album in albumList">
                        <img :src="album.artworkUrl100" alt="artworkUrl100" width="80px" height="80px" class="artist-img">
                        <div class="artist-desc">
                            <div class="artist-name"><span>Artist: {{ album.artistName }}</span></div>
                            <div class="artist-album"><span>Album: {{ album.collectionCensoredName }}</span></div>
                            <div class="view-artist">
                                <a :href="album.artistViewUrl" target="_blank" class="artist-url">View Artist</a><br>
                                <a :href="album.collectionViewUrl" target="_blank" class="album-url">View Album</a>
                            </div>
                            <div class="released">Released on:{{ album.releaseDate}}</div>
                        </div>
                    </div>
                    <div class="albums">
                        <img src="../images/androgynous-avatar-non-binary-queer-person (1).jpg" alt="artworkUrl100" width="80px" height="80px" class="artist-img">
                        <div class="artist-desc">
                            <div class="artist-name"><span>Artist: Davido</span></div>
                            <div class="artist-album"><span>Album: TimeLess</span></div>
                            <div class="view-artist">
                                <a href="#" target="_blank" class="artist-url">View Artist</a><br>
                                <a href="#" target="_blank" class="album-url">View Album</a>
                            </div>
                            <div class="released">Released: 2024</div>
                        </div>
                    </div>
                    <div class="albums">
                        <img src="../images/androgynous-avatar-non-binary-queer-person (1).jpg" alt="artworkUrl100" width="80px" height="80px" class="artist-img">
                        <div class="artist-desc">
                            <div class="artist-name"><span>Artist: Davido</span></div>
                            <div class="artist-album"><span>Album: TimeLess</span></div>
                            <div class="view-artist">
                                <a href="#" target="_blank" class="artist-url">View Artist</a><br>
                                <a href="#" target="_blank" class="album-url">View Album</a>
                            </div>
                            <div class="released">Released: 2024</div>
                        </div>
                    </div> -->
                   </div>
            </div>
        </section>
    </section>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { ItunesType, Result } from '../types/types.ts'
import { ItunesSearch } from './services/ItunesAPI';

const searchText = ref('');
let albumList = reactive([]) as unknown as Result[]
let albums = reactive({}) as ItunesType
let loading = ref(false)


async function searchItunes(search: string) {
    loading.value = true
    try {
        albums = await ItunesSearch(search)
        albumList = await albums.results
        console.log(albumList)
    } catch (err) {
        console.log(err, 'an error occured')
    } finally { 
        loading.value = false;
    }
}
</script>

<style scoped>
p, h1, h2, h3 {
    margin-top: 0;
}
section {
    border: 1px solid magenta;
    padding: 1rem;
}
#form {
    /* border: 1px solid magenta; */
    display: flex;
    gap: 1rem;
    padding: 0.2rem;
    box-sizing: border-box;
    margin-bottom: 1rem;
}
#search {
    box-sizing: border-box;
    padding: 0.75rem;
    font-size: 1rem;
    width: 100%;
    border-radius: 50px;
    border: none;
    background-color: rgb(39 45 55 / 54%);
    
    &:is(:hover, :focus) {
        background-color: rgba(50, 58, 71, 0.54);
        outline: 1px solid blue;
    }
}
.search-btn {
    border: 2px solid grey;
    border-radius: 40px;
    cursor: pointer;
    display: flex;
    place-items: center;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
}
.results-header {
    font-size: 0.85rem;
    font-weight: 600;
    color: rgb(69, 71, 73);
}
.main {
    display: grid;
    grid-template-rows: auto 1fr;
}
.result-display {
    border: 1px solid yellow;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    height: 400px;
    overflow: auto;
}
.albums {
    border: 1px solid grey;
    color: #EAF0F6;
    display: grid;
    grid-template-columns: auto 2fr;
    border-radius: 10px;
    padding: 0.75rem;
    gap: 1rem;
    background-color: black;
    max-width: 270px;
}
.artist-desc {
 /* margin-bottom: 10px; */
 display: flex;
 flex-direction: column;
 justify-content: space-between;
}
.artist-name {

}
.artist-album {

}
.artist-img {
    /* padding: .45rem; */
    /* border: 1px solid red; */
    border-radius: 5px;
}
.view-artist {
    display: flex;
}
.artist-url {

}
.album-url {

}
.released {

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
/* .placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
} */

.scroll-container {
  /* width: 300px; */
  /* height: 200px; */
  overflow: hidden; /* Hide scrollbar initially */
  position: relative;
  scrollbar-gutter: stable;
}

.scroll-container:hover {
  overflow: auto; /* Show scrollbar on hover */
  transition: all 300ms ease;

}

.scroll-container::-webkit-scrollbar {
  width: 5px;
  margin-left: 1rem;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #0c1052;
  border-radius: 4px;
  height: 100px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  transition: all 300ms ease;
  background-color: rgba(0, 0, 0, 0.7);
}

.scroll-container::-webkit-scrollbar-track {
  background-color: rgba(67, 82, 253, 0.281);
  margin: 15px 10px;
  border-radius: 10px;
}
.notif-icon {
    width: 20px;
    height: 20px;
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>