<script setup>
import './base-label.scss';

defineProps({
  selected: {
    type: Boolean,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <button
    type="button"
    class="label"
    :class="{
      label_selected: selected
    }"
  >
    <div class="label__container">
      <p class="label__title"><slot /></p>
      <sup class="label__number">{{ quantity }}</sup>
    </div>
  </button>
</template>
