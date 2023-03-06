<script>
import MoviesCard from "./MoviesCard.vue";
import TVSeriesCard from "./TVSeriesCard.vue";
import {store} from "../data/store.js";
import axios from "axios";

export default {
  data() {
    return {
      title: "Hello world",
      store,
    }
  },

  components: {
    MoviesCard, TVSeriesCard
  },

  created(){

  },

  // props: {
  //   isLoading: Boolean
  // },

  methods: {
    
  }
  


};
</script>

<template>
  <div class="container">
    <div class="row row-cols-3" v-if="store.listFilms.length">
      <h2 class="text-white w-100">Movies</h2>
      <MoviesCard v-for="movie in store.listFilms" :movie="movie"/>
        
    </div>


    <div class="row row-cols-3" v-if="store.listSeries.length">
      <h2 class="text-white w-100">TV Series</h2>
      <TVSeriesCard v-for="serie in store.listSeries" :serie="serie"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.row{
  margin: 20px 0;
  h2{
    padding: 10px 0;
  }
}
</style>