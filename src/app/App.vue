<script setup>
import '@/app/assets/scss/main.scss';
import { animateText } from '@/shared/lib/text-animation/animateText';
import { HomePage } from '@/pages/HomePage';
import { onMounted } from 'vue';

onMounted(() => {
  setTimeout(() => animateText(), 1000);
});
</script>

<template>
  <div class="wrapper">
    <HomePage />
  </div>
</template>
