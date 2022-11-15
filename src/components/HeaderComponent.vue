<template>
  <!-- title bar section -->
  <div class="container-lg d-flex align-items-center">
    <img src="../assets/img/logo.png" alt="Breaking Bad">
    <h1>Breaking Bad Api</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style lang="scss" scoped>
div {
  padding: 1rem;

  img {
    height: 2.7rem;
  }

  h1 {
    padding-left: 1rem;
  }

}
</style>
