<template>
  <div>
    <select name="category" id="cat-selector">
      <option value="1">Breaking Bad</option>
      <option value="2">Better Call Saul</option>

    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterComponent',

};
</script>

<style lang="scss" scoped>
select {
  cursor: pointer;
}
</style>
