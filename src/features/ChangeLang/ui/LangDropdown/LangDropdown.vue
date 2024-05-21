<script setup>
import { ref } from 'vue';
import { BaseDropdown } from '@/shared/ui';
import { setToLocalStorage, getFromLocalStorage } from '../../lib/helpers/storageHelper';

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
  <BaseDropdown @setCurrent="setCurrentLang" :heading="currentLang" :options="langOptions" />
</template>
