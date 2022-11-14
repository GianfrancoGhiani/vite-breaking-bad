<template>
  <div class="container-md">
    <section class="cards row row-cols-lg-5 g-3 row-cols-md-4 row-cols-sm-3">
      <CardComponent v-for="(char, index) in characterList" :key="char.char_id" :character="char" />
    </section>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import axios from 'axios';


export default {
  name: "BodyComponent",
  components: {
    CardComponent
  },
  data() {
    return {
      characterList: [],
    }
  },
  created() {
    axios.get('https://breakingbadapi.com/api/characters').then((answ) => {
      this.characterList = answ.data;
    })
  }

};
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/mixins' as*;
@use '../assets/style/partials/variables' as*;

.cards {
  padding: 2rem;
  background-color: $white-text;
}
</style>
