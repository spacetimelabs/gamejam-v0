<template>
  <div class="cat-description">
    <img :src="require('@/assets/ui/bg-sintomas.png')" class="symptom-bg"/>
    <h3 class="cat-name" >{{ name }}</h3>
    <div class="symptom-list">
      <symptom
        v-for="(s, i) in symptoms"
        :key="i"
        :icon="s.icon"
        :name="s.name"
        :level="s.severity"
        :discovered="s.discovered"
        :cured="s.cured"
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
  float: right;
  width: 444px;
  margin-top: 74px;
}

.symptom-list h4 {
  margin-bottom: 4px;
  text-align: left;
  color: #3c9d90;
}

.symptom-bg {
  position: absolute;
  width: 444px;
  height: 760px;
  top: 50px;
  left: 996px;
  z-index: -10;
}

.cat-name {
  color: #fc9f39;
  font-size: 30px;
  padding-left: 20px;
  text-align: center;
  padding-top: 6px;
  margin: 0;
}
</style>
