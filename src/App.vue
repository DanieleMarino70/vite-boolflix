<script>
import axios from "axios";
import {store} from "./data/store.js"
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      title: "Hello world",
      store,
      objList: {
        movies: "/search/movie",
        series: "/search/tv"
      },
     
    }
  },

  components: {
    AppHeader, AppMain,
  },

  // https://api.themoviedb.org/3/search/movie?api_key=659f0fa0de7fa265afb9fb30aa69ee7e&language=en-US&query=ritorno&page=1&include_adult=false

  methods: {
    sentTerm() {
      store.isLoading = true;

      
      // axios
      //   .get(`${store.baseUri}${this.objList.movies}?api_key=${store.apiKey}&query=${store.searchedTerm}`)
      //   .then((result) => {
      //     console.log(result.data.results);
      //     store.listFilms = result.data.results;
      //     console.log("----------");
      //     console.log(store.searchedTerm);
      //   }).finally(() => {
      //     store.isLoading = false;
          
      //   })



        axios.all([
        axios.get(`${store.baseUri}${this.objList.movies}?api_key=${store.apiKey}&query=${store.searchedTerm}`),
        axios.get(`${store.baseUri}${this.objList.series}?api_key=${store.apiKey}&query=${store.searchedTerm}`)
      ])
        .then(axios.spread((resultMovie, resultSeries) => {
          // Both requests are now complete
          console.log(resultMovie.data.results);
          store.listFilms = resultMovie.data.results;
          console.log(resultSeries.data.results);
          store.listSeries = resultSeries.data.results;
        }));


    }

  
  },

  computed: {
    
  },

  created(){
    
  }
};
</script>

<template>
  <AppHeader @on-search="sentTerm"/>

  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" 

</style>




// <!--    
//        axios
//         .get(`${store.baseUri}${this.objList.series}?api_key=${store.apiKey}&query=${searchedTerm}`)
//         .then((result) => {
//           console.log(result.data.results);
//           store.listSeries = result.data.results;
//           console.log("----------");
//         }); -->