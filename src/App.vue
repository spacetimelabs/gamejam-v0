<template>
  <div id="app">
    <stats-bar :cash="cash" :reputation="5" />
    <cat-description name="Mr Mustafari" :symptoms="symptoms" />

    <button @click="generateCat">Gera Gato</button>
    <button @click="doExam">Faz Exame {{ examLevel }}</button>

    <pre>level: {{ level }}</pre>
    <pre>examLevel: {{ examLevel }}</pre>
    <pre>symptoms: {{ symptoms }}</pre>
  </div>
</template>

<script>
import StatsBar from "./components/StatsBar.vue";
import CatDescription from "./components/CatDescription.vue";
import symptoms from "./symptoms";

const EXAMS_PRICE = {
  0: 150,
  1: 250,
  3: 500
};

export default {
  name: "app",
  data: () => ({
    cash: 1000,
    level: 0,
    examLevel: 0,
    symptoms: []
  }),
  components: {
    StatsBar,
    CatDescription
  },
  methods: {
    generateCat() {
      this.examLevel = 0;
      this.cash += 150; // TODO
      this.symptoms = symptoms.generateRandomSymptons(this.level);
    },
    doExam() {
      this.level += 1;
      this.cash -= EXAMS_PRICE[this.examLevel];
      for (let s of this.symptoms) {
        if (s.severity <= this.examLevel + 1) {
          s.discovered = true;
        }
      }
      this.examLevel += 1;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 10px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
