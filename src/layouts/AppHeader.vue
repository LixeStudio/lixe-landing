<script setup>
import { ref } from 'vue';
import '../assets/scss/layouts/header.scss';
import ButtonPrimary from '../components/ButtonPrimary.vue';
import AppDropdown from '../components/AppDropdown.vue';
import { setToLocalStorage, getFromLocalStorage } from '../utils/storageUtils';

defineProps({
  showButton: Boolean
});

const emit = defineEmits(['openModal']);

const languages = ['eng', 'esp', 'rus'];
const currentLang = ref(getFromLocalStorage('lang') || 'eng');

const updateLangOptions = () => {
  return languages.filter((lang) => lang !== currentLang.value);
};

const langOptions = ref(updateLangOptions());

const setCurrentLang = (current) => {
  currentLang.value = current;
  setToLocalStorage('lang', current);
  langOptions.value = updateLangOptions();
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__left-part">
        <img src="../assets/images/icons/logo.svg" alt="Lixe logo" />
      </div>
      <div class="header__right-part">
        <AppDropdown @setCurrent="setCurrentLang" :heading="currentLang" :options="langOptions" />
        <ButtonPrimary isHidden v-if="showButton" v-motion-roll-top @click="emit('openModal')"
          >Start the project</ButtonPrimary
        >
      </div>
    </div>
  </header>
</template>
