<script setup>
import './app-header.scss';
import { BaseButton } from '@/shared/ui';
import { LangDropdown } from '@/features/ChangeLang';
import { useScrollDirection } from '../composables/useScrollDirection';

defineProps({
  showButton: Boolean
});

const emit = defineEmits(['openModal']);
const { direction } = useScrollDirection();
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
        <div
          class="header__button"
          :class="{
            header__button_active: showButton
          }"
        >
          <BaseButton @click="emit('openModal')">{{
            $t('translation.header.buttonText')
          }}</BaseButton>
        </div>
      </div>
    </div>
  </header>
</template>
