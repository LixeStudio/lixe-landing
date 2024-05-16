<script setup>
import '../assets/scss/components/tab.scss';

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
      <h4 class="tab__title"><slot /></h4>
      <sup class="tab__number">2</sup>
    </div>
  </button>
</template>
