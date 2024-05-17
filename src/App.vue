<script setup>
import AppHeader from './layouts/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import PortfolioSection from './components/PortfolioSection.vue';
import ContactModal from './components/ContactModal.vue';
import AppFooter from './layouts/AppFooter.vue';
import { ref } from 'vue';

const showButton = ref(false);

const setShowButton = (value) => {
  showButton.value = value;
};

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpened.value = false;
  document.body.style.overflow = 'auto';
};
</script>

<template>
  <div class="wrapper">
    <AppHeader :showButton="showButton" @openModal="openModal" />
    <main>
      <HeroSection @setShowButton="setShowButton" @openModal="openModal" />
      <PortfolioSection />
    </main>
    <AppFooter @openModal="openModal" />
    <Transition>
      <ContactModal v-if="isModalOpened" @closeModal="closeModal" />
    </Transition>
  </div>
</template>
