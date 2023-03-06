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
    }
  }

};
</script>

<template>
  <div class="col">
    <ul>
      <li>{{ serie.original_name }}</li>
      <li><img :src="getImageFlag(serie.original_language.toUpperCase())" alt=""></li>
      <li>{{ serie.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>