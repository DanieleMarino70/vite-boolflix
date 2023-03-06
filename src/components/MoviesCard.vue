<script>
// import MyComponent from "./components/MyComponent.vue";
import {store} from "../data/store.js";

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

  props:{
    movie: Object,
    
  },

  methods:{
    getImageFlag(countryString) {
      return store.flagEndpoint + countryString + "/flat/64.png";
    }
  }

};
</script>

<template>
  <div class="col">
    <ul>
      <li>{{ movie.title }}</li>
      <li>{{ movie.original_title }}</li>
      <li ><img :src="getImageFlag(movie.original_language.toUpperCase())" alt=""></li>
      <li>{{ movie.vote_average }}</li>  
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>