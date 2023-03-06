<script>
// import MyComponent from "./components/MyComponent.vue";

import { store } from '../data/store';

export default {
  data() {
    return {
      title: "AppHeader",
      store,
    }
  },

  emits: ["on-search"],

  methods: {
    sendTerm(){
        this.$emit('on-search');
    }
  }

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">BoolFlix</a>
        <div class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="store.searchedTerm">
          <button class="btn btn-outline-success" type="button" @click="sendTerm">Search</button> 
        </div>
      </div>
    </nav>
</template>

<style lang="scss" scoped></style>