<script setup>
import { ref } from 'vue';
import './sort-dropdown.scss';
import { i18n } from '@/app/providers/i18n';

defineProps({
  currentSort: String,
  sortOptions: Object
});

const emit = defineEmits(['setCurrentSort']);

const isDropdownOpened = ref(false);

const setCurrentSort = (current) => {
  emit('setCurrentSort', current);
  isDropdownOpened.value = false;
};
</script>

<template>
  <div class="sort-dropdown">
    <div
      class="sort-dropdown__container"
      :style="{
        width: i18n.global.locale === 'eng' ? '90px' : null
      }"
      :class="{
        'sort-dropdown__container_opened': isDropdownOpened
      }"
    >
      <div class="sort-dropdown__button" @click="isDropdownOpened = !isDropdownOpened">
        <div
          class="sort-dropdown__item sort-dropdown__item_active"
          :class="{
            'sort-dropdown__icon-rotate': isDropdownOpened
          }"
        >
          <span>{{ $t('translation.portfolio.sort.title') }}</span>
        </div>
      </div>
      <div class="sort-dropdown__items">
        <div class="sort-dropdown__line"></div>
        <div
          class="sort-dropdown__item"
          v-for="(value, key) in {
            desc: i18n.global.t('translation.portfolio.sort.firstOption'),
            asc: i18n.global.t('translation.portfolio.sort.secondOption')
          }"
          :key="key"
          :class="{
            'sort-dropdown__item_selected': currentSort === key
          }"
          @click="setCurrentSort(key)"
        >
          <span>{{ value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
