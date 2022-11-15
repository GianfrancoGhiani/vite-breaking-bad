<template>
  <section class="container-md my-3">
    <FilterComponent @filteredList="creationPage" />
  </section>
  <div class="container-md my-body">
    <section class="my-3">
      <FoundedComponent :num="store.length" />
    </section>
    <section class="cards row row-cols-lg-5 g-3 row-cols-md-4 row-cols-sm-3">
      <CardComponent v-for="(char, index) in store.characterList" :key="char.char_id" :character="char" />
    </section>
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
      if (store.selection) {
        axios.get(store.url, { params: { category: store.selection } }).then((answ) => {

          store.characterList = answ.data;
          store.length = store.characterList.length;
          console.log(store.characterList, answ.data)
        })
      } else {
        axios.get(store.url).then((answ) => {
          store.characterList = answ.data;
          store.length = store.characterList.length;
        })
      }
    }
  },
  created() {
    this.creationPage();

  }

};
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/mixins' as*;
@use '../assets/style/partials/variables' as*;

.my-body {
  background-color: $white-text;
  padding: 2rem;

  .cards {
    padding: 2rem;
  }
}
</style>
