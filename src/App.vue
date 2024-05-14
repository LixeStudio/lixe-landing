<script setup>
import AppHeader from './layouts/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import AppFooter from './layouts/AppFooter.vue';
import { ref } from 'vue';

const showButton = ref(false);

const setShowButton = (value) => {
  showButton.value = value;
};
</script>

<template>
  <div class="wrapper">
    <AppHeader :showButton="showButton" />
    <main>
      <HeroSection @setShowButton="setShowButton" />
    </main>
    <AppFooter />
  </div>
</template>
