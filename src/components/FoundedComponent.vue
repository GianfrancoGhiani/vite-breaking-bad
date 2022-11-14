<template>
  <div class="found">Founded {{ num }} characters</div>
</template>

<script>
export default {
  name: 'FoundedComponent',
  props: {
    num: Number,
  }
};
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/mixins' as*;
@use '../assets/style/partials/variables' as*;

.found {
  padding: 1.2rem;
  font-weight: 600;
  background-color: $found-bg;
}
</style>
