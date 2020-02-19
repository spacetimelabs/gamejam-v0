<template>
  <div class="treatments">
    <div
      v-for="treat in treatments"
      :class="{ treatment: true, disabled: disabled || cash < treat.price }"
      :key="treat.name"
      :title="treat.SYMP.join(', ')"
      @click="!disabled ? $emit('vaccine', treat) : null"
    >
      {{ treat.name }} <small>(${{ treat.price }})</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cash: Number,
    disabled: {
      type: Boolean,
      default: () => false
    },
    treatments: Array
  }
};
</script>

<style scoped>
.treatments {
  position: absolute;
  left: 20px;
  top: 220px;
  border: 10px solid #fcc139;
  border-radius: 20px;
  background: #fffce8
}

.treatments .treatment {
  padding: 8px;
  cursor: pointer;
  font-size: 20px;
  color: #338277;
}

.treatments .treatment:hover {
  background: #fc9f39;
}

.treatments .treatment.disabled {
  opacity: 0.5;
}
</style>
