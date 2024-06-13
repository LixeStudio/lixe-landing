<script setup>
import './home-page.scss';
import { AppHeader } from '@/widgets/AppHeader';
import { HeroSection } from '@/widgets/HeroSection';
import { PortfolioSection } from '@/widgets/PortfolioSection';
import { ContactModal } from '@/widgets/ContactModal';
import { AppFooter } from '@/widgets/AppFooter';
import { DetailsModal } from '@/widgets/DetailsModal';
import { LoadingModal } from '@/widgets/LoadingModal';
import { BaseMessage } from '@/shared/ui';
import { ref, provide, onMounted, watch } from 'vue';
import { hideScroll, displayScroll } from '../lib/helpers/scrollHelpers';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const showButton = ref(false);
const isLoading = ref(true);

const setShowButton = (value) => {
  showButton.value = value;
};

const isContactModalOpened = ref(false);

let lenis;

const openContactModal = () => {
  isContactModalOpened.value = true;
  hideScroll();
  lenis.stop();
};

const closeContactModal = () => {
  isContactModalOpened.value = false;
  setTimeout(() => {
    displayScroll();
    lenis.start();
  }, 500);
};

const selectedProject = ref(null);

const openDetailsModal = (value) => {
  selectedProject.value = value;
  hideScroll();
};

const closeDetailsModal = () => {
  selectedProject.value = null;
  setTimeout(() => {
    displayScroll();
  }, 500);
};

provide('openModal', openDetailsModal);

const message = ref(null);

const setMessage = (value) => {
  message.value = value;
};

provide('setMessage', setMessage);

const getWrapper = () => {
  if (isContactModalOpened.value) {
    return document.querySelector('.contact-modal__container');
  } else if (selectedProject.value) {
    return document.querySelector('.details-modal');
  }
  return window;
};

const smoothScroll = () => {
  lenis = new Lenis({ wrapper: getWrapper() });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};

onMounted(() => {
  hideScroll();
  setTimeout(() => {
    isLoading.value = false;
    setTimeout(() => {
      displayScroll();
      smoothScroll();
    }, 500);
  }, 1000);
});

watch(
  [isContactModalOpened, selectedProject],
  () => {
    smoothScroll();
  },
  { flush: 'post' }
);
</script>

<template>
  <AppHeader :showButton="showButton" @openModal="openContactModal" />
  <main class="main">
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
  <Transition>
    <BaseMessage v-if="message" :message="message" />
  </Transition>
  <Transition>
    <LoadingModal v-if="isLoading" />
  </Transition>
</template>
