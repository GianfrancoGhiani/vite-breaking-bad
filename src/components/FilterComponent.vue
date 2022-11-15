<template>
  <div>
    <select name="category" id="cat-selector" @change="catChange()" v-model="store.selection">
      <option value="">All</option>
      <option value="Breaking Bad">Breaking Bad</option>
      <option value="Better Call Saul">Better Call Saul</option>
    </select>

  </div>
</template>

<script>
import { store } from '../assets/store.js';
export default {
  name: 'FilterComponent',
  data() {
    return {
      store,
    }
  },
  methods: {
    catChange() {
      this.$emit('filteredList')
    }
  },

};
</script>

<style lang="scss" scoped>
select {
  cursor: pointer;
}
</style>
