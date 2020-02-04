<template>
  <div :class="['symptom', status]">
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
    discovered: Boolean,
    cured: Boolean
  },
  computed: {
    status() {
      if (this.cured === true) {
        return "cured";
      }
      if (this.cured === false) {
        return "ill";
      }
      return "";
    }
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

.symptom.ill {
  background-color: red;
}

.symptom.cured {
  background-color: green;
}

h4,
p {
  margin: 0;
}

p {
  font-size: 12px;
}
</style>
