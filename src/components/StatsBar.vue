<template>
  <div class="stats-bar">
    <div class="cash">$$ {{ cash }}</div>
    <div class="reputation">★★★★★ ({{ reputation }})</div>
  </div>
</template>

<script>
export default {
  props: {
    cash: Number,
    reputation: Number
  }
};
</script>

<style scoped>
.stats-bar {
  float: left;
  padding: 10px;
  background: #fafafa;
  border-bottom: 1px solid #dddd;
  min-width: 280px;
}

.stats-bar .cash {
  color: green;
  display: inline-block;
  padding: 5px;
  font-weight: bold;
}

.stats-bar .reputation {
  padding: 5px;
  float: right;
  color: gold;
}
</style>
