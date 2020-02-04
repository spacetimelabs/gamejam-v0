<template>
  <div class="stats-bar">
    <div class="reputation">
      <span class="bar" :style="{ width: reputationSize + 'px' }" />
    </div>
    <div class="cash">$$ {{ cash }}</div>
    <div class="level">Lvl. {{ level }}</div>
  </div>
</template>

<script>
export default {
  props: {
    level: Number,
    cash: Number,
    reputation: Number
  },
  computed: {
    reputationSize() {
      const maxWidth = 215;
      return (this.reputation / 100) * 215;
    }
  }
};
</script>

<style scoped>
.stats-bar .reputation {
  padding: 5px;
  color: gold;
  background: url("../assets/ui/reputacao.png") no-repeat;
  height: 40px;
  position: relative;
}

.stats-bar .reputation .bar {
  display: block;
  height: 20px;
  width: 50px;
  border-radius: 5px;
  background: white;
  position: absolute;
  top: 12px;
  left: 48px;
  transition: 250ms ease width;
}
</style>
