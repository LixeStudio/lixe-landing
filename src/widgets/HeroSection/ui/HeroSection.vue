<script setup>
import './hero-section.scss';
import { BaseButtonWithArrow } from '@/shared/ui';
import { HeroVideo } from '@/entities/Hero';
import { HeroList } from '@/entities/Hero';
import { ref } from 'vue';
import { useScrollHandler } from '@/shared/composables/useScrollHandler';

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

useScrollHandler(handleScroll);
</script>

<template>
  <section class="hero" ref="hero">
    <div class="hero__container">
      <div class="hero__content">
        <div class="hero__title-wrapper">
          <video class="hero__video-background" autoplay loop muted>
            <source src="@/shared/assets/video/hero-video-background.mp4" type="video/mp4" />
          </video>
          <h1 class="hero__title">
            <span class="hero__title-span">{{ $t('translation.hero.title') }}</span>
          </h1>
        </div>
        <div
          class="hero__details"
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              delay: 200,
              type: 'keyframes',
              ease: 'easeOut'
            }
          }"
        >
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
