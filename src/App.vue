<template>
  <div id="app">
    <stats-bar :cash="cash" :reputation="5" />
    <cat-description name="Mr Mustafari" :symptoms="symptoms" />

    <cat v-if="cat" :cat="cat" />

    <button @click="generateCat">Gera Gato</button>
    <button @click="doExam" :disabled="!examButtonEnabled">
      Faz Exame {{ examLevel }}
    </button>

    <div
      style="position: absolute; top: 200px; left: 100px; background: rgba(0, 0, 0, 0.2); color: white"
    >
      <pre>level: {{ level }}</pre>
      <pre>examLevel: {{ examLevel }}</pre>
      <pre>symptoms: {{ symptoms }}</pre>
    </div>
  </div>
</template>

<script>
import StatsBar from "./components/StatsBar.vue";
import CatDescription from "./components/CatDescription.vue";
import Cat from "./components/Cat.vue";
import symptoms from "./symptoms";
import cats from "./cats";

const EXAMS_PRICE = {
  0: 150,
  1: 250,
  2: 500
};

export default {
  name: "app",
  data: () => ({
    cash: 1000,
    level: 0,
    cat: null,
    examLevel: 0,
    symptoms: []
  }),
  components: {
    StatsBar,
    CatDescription,
    Cat
  },
  created() {
    this.generateCat();
    setInterval(() => {
      this.generateCat();
    }, 1000);
  },
  methods: {
    generateCat() {
      this.examLevel = 0;
      this.cash += 150; // TODO
      this.symptoms = symptoms.generateRandomSymptons(this.level);
      this.cat = cats.generateCat();
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
  },
  computed: {
    examButtonEnabled() {
      if (this.examLevel == 3) {
        return false;
      }
      if (this.cash <= EXAMS_PRICE[this.examLevel]) {
        return false;
      }
      return true;
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
