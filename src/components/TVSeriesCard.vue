<script>
// import MyComponent from "./components/MyComponent.vue";
import { store } from "../data/store.js";

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

  props: {
    serie: Object,
  },

  methods: {
    getImageFlag(countryString) {
      return store.flagEndpoint + countryString + "/flat/64.png";
    },

    getVote(rating, index) {
      if ((index == 1) && ((Math.round(rating) - 2) >= 0)) return " active ";
      if ((index == 2) && ((Math.round(rating) - 4) >= 0)) return " active ";
      if ((index == 3) && ((Math.round(rating) - 6) >= 0)) return " active ";
      if ((index == 4) && ((Math.round(rating) - 8) >= 0)) return " active ";
      if ((index == 5) && ((Math.round(rating) - 10) >= 0)) return " active ";


    },

    getImage(serie) {
      if (serie.backdrop_path == null) return "/images/noimage.png";
      return store.imgPath + serie.backdrop_path
    }
  }

};
</script>

<template>
   <div class="col">
      <div class="card ">
        <div class="overlay position-relative">
          <img :src="getImage(serie)" alt="" class="img-fluid">
          <div class="dark-overlay"></div>
          <div class="text position-absolute">
             <div>{{ serie.original_name }}</div>
             <div class="flag"><img :src="getImageFlag(serie.original_language.toUpperCase())" alt="" class="img-fluid"></div>
            <div>
              <font-awesome-icon icon="fa-solid fa-star"  v-for="n in 5" :class="getVote(serie.vote_average, n)"/>
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