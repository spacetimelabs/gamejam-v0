<template>
  <div class="cat-description">
    <h3>{{ name }}</h3>

    <div class="symptom-list">
      <h4 @click="discovered = !discovered">Sintomas</h4>
      <symptom
        v-for="(s, i) in symptoms"
        :key="i"
        :icon="null"
        :name="s.name"
        :level="s.severity"
        :discovered="s.discovered"
      />
    </div>
  </div>
</template>

<script>
import Symptom from "./Symptom.vue";

export default {
  components: {
    Symptom
  },
  data: () => {
    return {
      discovered: false
    };
  },
  props: {
    name: String,
    symptoms: Array
  }
};
</script>

<style scoped>
.cat-description {
  float: right;
  min-width: 320px;
  margin-right: 20px;
  text-align: center;
}

.symptom-list h4 {
  margin-bottom: 4px;
  text-align: left;
  color: #666;
}
</style>
