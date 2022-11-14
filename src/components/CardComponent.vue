<template>
  <div class="my-card col">
    <div class="my-card-img"><img :src="character.img" :alt="character.name"></div>
    <div class="my-card-name">{{ character.name }}</div>
    <div class="grey">{{ character.category }}</div>
    <div class="grey">{{ character.status }}</div>
    <div class="details">
      <div>{{ character.nickname }}</div>
      <div>by {{ character.portrayed }}</div>
    </div>


  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CardComponent',
  props: {
    character: Object
  },
  data() {
    return {

    }
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/mixins' as*;
@use '../assets/style/partials/variables' as*;

.my-card {
  background-color: $main-bg;
  text-align: center;

  padding: 1rem;

  .my-card-img {
    img {
      max-width: 100%;
    }
  }

  .grey {
    color: $grey-text;
  }

  .my-card-name {
    max-width: 100%;
    font-weight: 700;
    text-transform: uppercase;
  }

  .details {
    font-size: 80%;
    color: $main-bg;

    & div:first-child {
      font-weight: bold;
    }


  }

  &:hover {
    .details {
      color: $grey-text;
    }
  }
}
</style>
