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
}

.treatments .treatment {
  padding: 8px;
  background: white;
  cursor: pointer;
}

.treatments .treatment.disabled {
  opacity: 0.5;
}
</style>
