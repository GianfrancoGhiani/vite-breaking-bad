<template>
  <div class="container-md">
    <section class="cards row row-cols-5">
      <CardComponent :character="character" />
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
      character: '',
    }
  },
  created() {
    axios.get('https://breakingbadapi.com/api/characters').then((answ) => {
      this.character = answ.data[0];
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
