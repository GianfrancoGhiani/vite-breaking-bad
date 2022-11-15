<template>
  <div class="col">
    <div class="my-card">
      <div class="my-card-img"><img :src="character.img" :alt="character.name"></div>
      <div class="my-card-name">{{ character.name }}</div>
      <div class="grey">{{ character.category }}</div>
      <div class="grey">{{ character.status }}</div>
      <div class="details">
        <div>{{ character.nickname }}</div>
        <div>by {{ character.portrayed }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    character: Object,
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
  cursor: pointer;
  background-color: $main-bg;
  text-align: center;
  padding: 1rem;
  height: 480px;

  .my-card-img {
    height: 315px;
    overflow: hidden;

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

@media screen and (max-width: 1200px) {
  .my-card {
    height: 400px;

    .my-card-img {
      height: 200px;
    }
  }
}

@media screen and (max-width: 768px) {
  .my-card {
    height: 380px;

  }
}
</style>
