<script>
// import MyComponent from "./components/MyComponent.vue";
import {store} from "../data/store.js";

export default {
  data() {
    return {
      title: "Hello world",
      sum: 0,
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
    },

    getVote(rating, index){
      if((index == 1) && ((Math.round(rating) - 2) >= 0)) return " active ";
      if ((index == 2) && ((Math.round(rating) - 4) >= 0)) return " active ";
      if ((index == 3) && ((Math.round(rating) - 6) >= 0)) return " active ";
      if ((index == 4) && ((Math.round(rating) - 8) >= 0)) return " active ";
      if ((index == 5) && ((Math.round(rating) - 10) >= 0)) return " active ";
      
      
    },

    getImage(movie){
      if(movie.backdrop_path == null) return "/images/noimage.png";
      return store.imgPath + movie.backdrop_path
    }
  }

};
</script>

<template>
  <div class="col">
    <div class="card ">
      <div class="overlay position-relative">
        <img :src="getImage(movie)" alt="" class="img-fluid">
        <div class="dark-overlay"></div>
        <div class="text position-absolute">
           <div>{{ movie.title }}</div>
           <div>{{ movie.original_title }}</div>
           <div class="flag"><img :src="getImageFlag(movie.original_language.toUpperCase())" alt="" class="img-fluid"></div>
          <div>
            <font-awesome-icon icon="fa-solid fa-star"  v-for="n in 5" :class="getVote(movie.vote_average, n)"/>
          </div>
        </div>
      </div>
      <div>
        </div>  
    </div>
  </div>
</template>

<style lang="scss" scoped>

.col{
  margin: 10px 0;
  
  
  .card{
    padding: 5px;
    background-color: grey;
    .overlay:hover{
      .dark-overlay{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.3);
      }

      .text{
        display: block;
        overflow: auto;
      }

      

      
    }

  }

  .flag{
    width: 2rem;
  }

 .text{
    display: none;
    color: white;
    top: 0;

    
  }
  

  .active {
  color: goldenrod;
}

}
</style>




<!-- <div class="col">
    <ul>
      <li ><img :src="store.imgPath + movie.backdrop_path" alt=""></li>
      <li>{{ movie.title }}</li>
      <li>{{ movie.original_title }}</li>
      <li ><img :src="getImageFlag(movie.original_language.toUpperCase())" alt=""></li>
      <li>
        {{ movie.vote_average }}
        <ul class="d-flex">
          <li>
            <font-awesome-icon icon="fa-solid fa-star"  v-for="n in 5" :class="getVote(movie.vote_average, n)"/>
          </li>
        </ul>
      </li>  
    </ul>
  </div> -->