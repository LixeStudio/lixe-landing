<script setup>
import './base-close-button.scss';

const emit = defineEmits(['close']);
</script>

<template>
  <div class="close-button" @click.stop="emit('close')">
    <img src="../../assets/icons/close.svg" alt="Close" />
  </div>
</template>
