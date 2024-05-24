<script setup>
import './app-header.scss';
import { BaseButton } from '@/shared/ui';
import { LangDropdown } from '@/features/ChangeLang';
import { useScrollDirection } from '../composables/useScrollDirection';
import { useMotions } from '@vueuse/motion';

defineProps({
  showButton: Boolean
});

const emit = defineEmits(['openModal']);
const { direction } = useScrollDirection();
const motions = useMotions();
</script>

<template>
  <header
    class="header"
    :style="{
      transform: direction === 'up' ? 'translateY(0%)' : 'translateY(-150%)'
    }"
  >
    <div class="header__container">
      <div class="header__left-part">
        <img src="../assets/icons/logo.svg" alt="Lixe logo" />
      </div>
      <div class="header__right-part">
        <LangDropdown />
        <transition :css="false" @leave="(el, done) => motions.button.leave(done)">
          <BaseButton
            class="header__button"
            isHidden
            v-if="showButton"
            v-motion="'button'"
            :initial="{
              y: 100
            }"
            :enter="{
              y: 0,
              width: '100%'
            }"
            :leave="{
              y: -150,
              width: '0%',
              transition: {
                duration: 300,
                type: 'keyframes',
                ease: 'ease'
              }
            }"
            @click="emit('openModal')"
            >{{ $t('translation.header.buttonText') }}</BaseButton
          >
        </transition>
      </div>
    </div>
  </header>
</template>
