<script setup>
import './base-tab.scss';

defineProps({
  selected: {
    type: Boolean,
    required: true
  }
});
</script>

<template>
  <button
    type="button"
    class="tab"
    :class="{
      tab_selected: selected
    }"
  >
    <div class="tab__container">
      <p class="tab__title"><slot /></p>
      <sup class="tab__number">2</sup>
    </div>
  </button>
</template>
