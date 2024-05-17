<script setup>
import AppHeader from './layouts/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import PortfolioSection from './components/PortfolioSection.vue';
import ContactModal from './components/ContactModal.vue';
import ContactForm from './components/ContactForm.vue';
import AppFooter from './layouts/AppFooter.vue';
import { ref } from 'vue';

const showButton = ref(false);

const setShowButton = (value) => {
  showButton.value = value;
};

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};

const closeModal = () => {
  isModalOpened.value = false;
};

const handleSubmit = () => {
  console.log('Submit');
  closeModal();
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
      <ContactModal :isOpen="isModalOpened" @closeModal="closeModal">
        <ContactForm @closeModal="closeModal" @handleSubmit="handleSubmit" />
      </ContactModal>
    </Transition>
  </div>
</template>
