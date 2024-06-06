<script setup>
import './base-button.scss';
</script>

<template>
  <button class="button-primary">
    <div class="button-primary__inner-wrapper">
      <div class="button-primary__inner">
        <span class="button-primary__text"><slot /></span>
        <span class="button-primary__text"><slot /></span>
      </div>
    </div>
  </button>
</template>
