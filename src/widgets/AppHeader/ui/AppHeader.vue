<script setup>
import './app-header.scss';
import { BaseButton } from '@/shared/ui';
import { LangDropdown } from '@/features/ChangeLang';

defineProps({
  showButton: Boolean
});

const emit = defineEmits(['openModal']);
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__left-part">
        <img src="../assets/icons/logo.svg" alt="Lixe logo" />
      </div>
      <div class="header__right-part">
        <LangDropdown />
        <BaseButton isHidden v-if="showButton" v-motion-pop @click="emit('openModal')">{{
          $t('translation.header.buttonText')
        }}</BaseButton>
      </div>
    </div>
  </header>
</template>
