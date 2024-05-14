<script setup>
import '../assets/scss/layouts/header.scss';
import ButtonPrimary from '../components/ButtonPrimary.vue';
import HeaderDropdown from '../components/HeaderDropdown.vue';

defineProps({
  showButton: Boolean
});

const emit = defineEmits(['openModal']);
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__left-part">
        <img src="../assets/images/icons/logo.svg" alt="Lixe logo" />
      </div>
      <div class="header__right-part">
        <HeaderDropdown />
        <ButtonPrimary isHidden v-if="showButton" v-motion-roll-top @click="emit('openModal')"
          >Start the project</ButtonPrimary
        >
      </div>
    </div>
  </header>
</template>
