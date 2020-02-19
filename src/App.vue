<template>
  <div id="app">
    <div v-if="gameOver" class="game-over">
      <img :src="require('@/assets/game-over.jpg')" />
    </div>

    <div v-if="!started && !gameOver">
      <div class="overlay" @click="startGame">
        <span class="start-button">Bora lá!</span>
      </div>
    </div>
    <div v-if="cat && !gameOver">
      <stats-bar :cash="cash" :reputation="reputation" :level="level" />
      <cat-description :name="cat.name" :symptoms="symptoms" />
      <cat v-if="cat" :cat="cat" />

      <treatments
        :cash="cash"
        :treatments="treatments"
        @vaccine="onVaccine"
        :disabled="disableVaccine"
      />

      <button @click="generateCat">Gera Gato</button>
      <button @click="doExam" :disabled="!examButtonEnabled">Faz Exame {{ examLevel }}</button>
    </div>
  </div>
</template>

<script>
import StatsBar from "./components/StatsBar.vue";
import CatDescription from "./components/CatDescription.vue";
import Cat from "./components/Cat.vue";
import Treatments from "./components/Treatments.vue";
import symptoms from "./symptoms";
import cats from "./cats";

const EXAMS_PRICE = {
  0: 0,
  1: 150,
  2: 250,
  3: 500
};

export default {
  name: "app",
  data: () => ({
    disableVaccine: false,
    treatments: symptoms.TREATMENTS.sort((t1, t2) =>
      t1.price < t2.price ? -1 : t1.price == t2.price ? 0 : 1
    ),
    gameOver: false,
    started: false,
    reputation: 50,
    cash: 1000,
    level: 1,
    cat: null,
    examLevel: 0,
    symptoms: []
  }),
  components: {
    StatsBar,
    CatDescription,
    Cat,
    Treatments
  },
  created() {
    this.startGame();
  },
  methods: {
    startGame() {
      this.generateCat();
      this.started = true;
    },
    generateCat() {
      this.examLevel = 0;
      this.cash += 100 + 20 * this.level;
      this.symptoms = symptoms.generateRandomSymptons(this.level);
      this.cat = cats.generateCat();
      this.doExam();
    },
    doExam() {
      this.cash -= EXAMS_PRICE[this.examLevel];

      this.symptoms = this.symptoms.map(s => {
        return { ...s, discovered: s.severity <= this.examLevel };
      });
      this.examLevel += 1;
    },
    onVaccine(treat) {
      this.disableVaccine = true;
      this.cash -= treat.price;

      this.symptoms = this.symptoms.map(s => {
        return {
          ...s,
          cured: treat.SYMP.indexOf(s.name) != -1,
          discovered: true
        };
      });

      const reputationGain = this.symptoms
        .filter(s => s.cured)
        .map(s => s.severity)
        .reduce((a, b) => a + b + 1, 0);
      const reputationLoss = this.symptoms
        .filter(s => !s.cured)
        .map(s => s.severity)
        .reduce((a, b) => a + b + 1, 0);

      this.reputation += (reputationGain - reputationLoss) * 5;
      if (this.reputation > 100) this.reputation = 100;
      this.level += 1;

      if (this.reputation <= 0) {
        this.gameOver = true;
      }

      setTimeout(() => {
        this.generateCat();
        this.disableVaccine = false;
      }, 1000);
    }
  },
  computed: {
    examButtonEnabled() {
      if (this.examLevel == 4) {
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
  width: 1440px;
  height: 1024px;
  background-image: url("./assets/fundo.png");
  background-repeat: no-repeat;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.overlay {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  left: 0;
  top: 0;
  position: absolute;
  width: 1440px;
  height: 1024px;
}

.start-button {
  position: absolute;
  left: 50%;
  top: 50%;
  color: white;
  font-size: 32px;
}

.game-over {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  left: 0;
  top: 0;
  position: absolute;
  width: 1440px;
  height: 1024px;
}

.game-over img {
  position: absolute;
  top: 80px;
  left: 320px;

  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
