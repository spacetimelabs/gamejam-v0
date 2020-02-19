<template>
  <div class="stats-bar">
    <div class="reputation">
      <span class="bar" :style="{ width: reputationSize + 'px' }" />
    </div>
    <div class="cash">$ {{ cash }}</div>
    <div class="level">{{ level }}</div>
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

.cash {
  background: url('../assets/ui/dinheiro.png') no-repeat;
  width: 168px;
  height: 45px;
  color: white;
  font-size: 20px;
  padding-left: 48px;
  padding-top: 7px;
  font-weight: bold;
}

.level {
  background: url('../assets/ui/gatos.png') no-repeat;
  width: 168px;
  height: 45px;
  color: white;
  font-size: 20px;
  padding-left: 48px;
  padding-top: 7px;
  font-weight: bold;
}

.stats-bar {
  float: left;
  width: 300px;
  height: 120px;
}

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
