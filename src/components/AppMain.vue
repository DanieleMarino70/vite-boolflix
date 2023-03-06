<script>
// import MyComponent from "./components/MyComponent.vue";
import {store} from "../data/store.js"

export default {
  data() {
    return {
      title: "Hello world",
      store,
    }
  },

  // components: {
  //   MyComponent,
  // },

  created(){

  },

  // props: {
  //   isLoading: Boolean
  // },


};
</script>

<template>
  <div class="container">
    <div class="row row-cols-3">
        <div class="col" v-for="movie in store.listFilms">
            <ul>
                <li>{{ movie.title }}</li>
                <li>{{ movie.original_title }}</li>
                <li>{{ movie.original_language }}</li>
                <li>{{ movie.vote_average }}</li>  
            </ul>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>