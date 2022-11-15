<template>
  <!-- waiting to the loaded page show a loader -->
  <div v-if="!store.loading">
    <!-- page body divided into 3 pts -->

    <!-- filter pt -->
    <section class="container-md my-3">
      <!--   filteredList is an emited event that allows to call the creationpage funct
                  it allows to reload the content based to the filter       -->
      <FilterComponent @filteredList="creationPage" />
    </section>

    <!-- "how many founded" bar -->
    <div class="container-md my-body">
      <section class="my-3">
        <FoundedComponent :num="store.length" />
      </section>

      <!-- card list section -->
      <section class="cards row row-cols-lg-5 g-3 row-cols-md-4 row-cols-sm-3">
        <!-- CardComponent is waiting to an obj prop, sended by cicling "axios.answer.data" -->
        <CardComponent v-for="(char, index) in store.characterList" :key="char.char_id" :character="char" />
      </section>
    </div>
  </div>
  <!-- loader -->
  <div v-else class="container-md d-flex align-items-center justify-content-center my-5">
    <i class="load fa-solid fa-spinner fa-spin-pulse"></i>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import axios from 'axios';
import FoundedComponent from './FoundedComponent.vue';
import FilterComponent from './FilterComponent.vue';
import { store } from '../assets/store.js'

export default {
  name: "BodyComponent",
  components: {
    CardComponent,
    FoundedComponent,
    FilterComponent
  },
  data() {
    return {
      store,

    }
  },
  methods: {
    creationPage() {
      // the page's loading : show loader
      store.loading = true;
      // selection passed through the FilterComponent thanks to a v-model
      if (store.selection) {
        // changes url adding this selection (endpoint) into params 
        axios.get(store.url, { params: { category: store.selection } }).then((answ) => {
          store.characterList = answ.data;
          store.length = store.characterList.length;
          store.loading = false;
        })
      } else {
        // wo any selection charge the full page
        axios.get(store.url).then((answ) => {
          store.characterList = answ.data;
          store.length = store.characterList.length;
          store.loading = false;
        })
      }
    }
  },
  created() {
    // on load create the page
    this.creationPage();

  }

};
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/mixins' as*;
@use '../assets/style/partials/variables' as*;

.load {
  font-size: 5rem;
}

.my-body {
  background-color: $white-text;
  padding: 2rem;

  .cards {
    padding: 2rem;
  }
}
</style>
