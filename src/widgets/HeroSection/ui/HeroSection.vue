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
        <h1 class="hero__title">{{ $t('translation.hero.title') }}</h1>
        <div class="hero__details">
          <p class="hero__paragraph">
            {{ $t('translation.hero.description') }}
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
