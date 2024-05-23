<script setup>
import './lang-dropdown.scss';
import { computed, ref, watch } from 'vue';
import { setToLocalStorage, getFromLocalStorage } from '../../lib/helpers/storageHelper';
import { i18n } from '@/app/providers/i18n';

const languages = i18n.global.availableLocales;
const currentLang = ref(getFromLocalStorage('lang') || i18n.global.locale);
const isDropdownOpened = ref(false);

const langOptions = computed(() => {
  return languages.filter((lang) => lang !== currentLang.value);
});

watch(
  currentLang,
  () => {
    i18n.global.locale = currentLang.value;
  },
  { immediate: true }
);

const setCurrentLang = (current) => {
  currentLang.value = current;
  setToLocalStorage('lang', current);
  isDropdownOpened.value = false;
};
</script>

<template>
  <div class="lang-dropdown">
    <div
      class="lang-dropdown__container"
      :class="{
        'lang-dropdown__container_opened': isDropdownOpened
      }"
    >
      <div class="lang-dropdown__button" @click="isDropdownOpened = !isDropdownOpened">
        <div
          class="lang-dropdown__item lang-dropdown__item_active"
          :class="{
            'lang-dropdown__icon-rotate': isDropdownOpened
          }"
        >
          <span>{{ currentLang }}</span>
        </div>
      </div>
      <div class="lang-dropdown__items">
        <div class="lang-dropdown__line"></div>
        <div
          class="lang-dropdown__item"
          v-for="option in langOptions"
          :key="option"
          @click="setCurrentLang(option)"
        >
          <span>{{ option }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
