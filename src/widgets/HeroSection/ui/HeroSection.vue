<script setup>
import './hero-section.scss';
import { BaseButtonWithArrow } from '@/shared/ui';
import { HeroVideo } from '@/entities/Hero';
import { HeroList } from '@/entities/Hero';
import { onMounted, onUnmounted, ref } from 'vue';

const hero = ref(null);
const emit = defineEmits(['setShowButton', 'openModal']);

const handleScroll = () => {
  if (hero.value) {
    const targetRect = hero.value.getBoundingClientRect();
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
      emit('setShowButton', false);
      return;
    }
    emit('setShowButton', true);
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section class="hero" ref="hero">
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">Your Digital Journey Starts Here</h1>
        <div class="hero__details">
          <p class="hero__paragraph">
            Thank you for visiting our website! We’re currently in the process of crafting something
            special. While we’re working behind the scenes to bring you an exceptional online
            experience, we invite you to explore our portfolio. Stay tuned for updates, and thank
            you for your patience!
          </p>
          <BaseButtonWithArrow isHidden @click="emit('openModal')" />
        </div>
      </div>
      <div class="hero__box">
        <HeroVideo />
        <HeroList />
      </div>
    </div>
  </section>
</template>
