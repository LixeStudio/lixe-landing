<script setup>
import './base-button.scss';

defineProps({
  isHidden: Boolean
});
</script>

<template>
  <button
    class="button-primary"
    :class="{
      'button-primary_hidden': isHidden
    }"
  >
    <div class="button-primary__inner-wrapper">
      <div class="button-primary__inner">
        <span class="button-primary__text"><slot /></span>
        <span class="button-primary__text"><slot /></span>
      </div>
    </div>
  </button>
</template>
