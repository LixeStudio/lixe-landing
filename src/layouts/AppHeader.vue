<script setup>
import '../assets/scss/layouts/header.scss';
import ButtonPrimary from '../components/ButtonPrimary.vue';
import HeaderDropdown from '../components/HeaderDropdown.vue';

defineProps({
  showButton: Boolean
});
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__left-part">
        <img src="../assets/images/icons/logo.svg" alt="Lixe logo" />
      </div>
      <div class="header__right-part">
        <HeaderDropdown />
        <ButtonPrimary v-if="showButton" v-motion-roll-top />
      </div>
    </div>
  </header>
</template>
