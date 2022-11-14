<template>
  <div class="container-md my-body">
    <section class="my-3">
      <FoundedComponent :num="length" />
    </section>
    <section class="cards row row-cols-lg-5 g-3 row-cols-md-4 row-cols-sm-3">
      <CardComponent v-for="(char, index) in characterList" :key="char.char_id" :character="char" />
    </section>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import axios from 'axios';
import FoundedComponent from './FoundedComponent.vue';


export default {
  name: "BodyComponent",
  components: {
    CardComponent,
    FoundedComponent
  },
  data() {
    return {
      characterList: [],
      length: null,
    }
  },
  created() {
    axios.get('https://breakingbadapi.com/api/characters').then((answ) => {
      this.characterList = answ.data;
      this.length = this.characterList.length;
    })
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
