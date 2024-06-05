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
        <h1 class="hero__title" text-split letters-fade-in>
          {{ $t('translation.hero.title') }}
        </h1>
        <div class="hero__details">
          <p class="hero__paragraph" text-split words-slide-up>
            {{ $t('translation.hero.description') }}
          </p>
          <BaseButtonWithArrow
            v-motion-slide-right
            :delay="800"
            isHidden
            @click="emit('openModal')"
          />
        </div>
      </div>
      <div class="hero__box">
        <HeroVideo />
        <HeroList />
      </div>
    </div>
  </section>
</template>
