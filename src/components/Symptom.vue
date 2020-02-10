<template>
  <div :class="['symptom', status]">
    <div v-if="discovered">
      <div class='symtom-icon-wrapper' >
        <img :src="icon" class='symptom-icon' />
      </div>
      <h4>{{ name }}</h4>
      <p>Gravidade: {{ level }}</p>
    </div>
    <div v-else>
      <div class='symtom-icon-wrapper' >
        <img :src="require(`@/assets/sintomas/unknown.png`)" class='symptom-icon' />
      </div>
      <h4>?????</h4>
      <p>Gravidade: ?</p>
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
  padding: 5px 15px;
  color: #42a38e;
  height: 49px;
  font-size: 22px;
  min-height: 78px;
}

.symptom.ill {
  background-color: red;
}

.symptom.cured {
  background-color: green;
}

.symptom-icon {
  padding-right: 18px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
}

.symtom-icon-wrapper {
  position: relative;
  float: left;
  min-width: 78px;
  min-height: 68px;
}

h4,
p {
  margin: 0;
}

p {
  font-size: 12px;
}
</style>
