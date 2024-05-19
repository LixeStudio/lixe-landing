<script setup>
import { AppHeader } from '@/widgets/AppHeader';
import { HeroSection } from '@/widgets/HeroSection';
import { PortfolioSection } from '@/widgets/PortfolioSection';
import { ContactModal } from '@/widgets/ContactModal';
import { AppFooter } from '@/widgets/AppFooter';
import { DetailsModal } from '@/widgets/DetailsModal';
import { ref, provide } from 'vue';
import { hideScroll, displayScroll } from '../lib/helpers/scrollHelpers';

const showButton = ref(false);

const setShowButton = (value) => {
  showButton.value = value;
};

const isContactModalOpened = ref(false);

const openContactModal = () => {
  isContactModalOpened.value = true;
  hideScroll();
};

const closeContactModal = () => {
  isContactModalOpened.value = false;
  displayScroll();
};

const selectedProject = ref(null);

const openDetailsModal = (value) => {
  selectedProject.value = value;
  hideScroll();
};

const closeDetailsModal = () => {
  selectedProject.value = null;
  displayScroll();
};

provide('openModal', openDetailsModal);
</script>

<template>
  <AppHeader :showButton="showButton" @openModal="openContactModal" />
  <main>
    <HeroSection @setShowButton="setShowButton" @openModal="openContactModal" />
    <PortfolioSection />
  </main>
  <AppFooter @openModal="openContactModal" />
  <Transition>
    <ContactModal v-if="isContactModalOpened" @closeModal="closeContactModal" />
  </Transition>
  <Transition>
    <DetailsModal
      v-if="selectedProject"
      @closeModal="closeDetailsModal"
      :project="selectedProject"
    />
  </Transition>
</template>
