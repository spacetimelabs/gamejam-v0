<template>
  <div class="symptom">
    <div v-show="discovered">
      <h4>{{ name }}</h4>
      <p>Gravidade: {{ level }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    name: String,
    level: Number,
    discovered: Boolean
  }
};
</script>

<style scoped>
.symptom {
  padding: 16px 15px;
  border: 3px solid #29366f;
  background: #41a6f6;
  color: #f4f4f4;
  margin-bottom: 10px;
  height: 40px;
}

h4,
p {
  margin: 0;
}

p {
  font-size: 12px;
}
</style>
