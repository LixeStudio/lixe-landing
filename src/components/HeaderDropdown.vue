<script setup>
import { ref } from 'vue';
import '../assets/scss/components/header-dropdown.scss';

const isDropdownOpened = ref(false);
</script>

<template>
  <div class="header__dropdown">
    <div class="header__dropdown-button" @click="isDropdownOpened = !isDropdownOpened">
      <div class="header__dropdown-item">
        <span>eng</span>
      </div>
      <div
        class="header__dropdown-icon"
        :class="{
          'header__dropdown-icon_active': isDropdownOpened
        }"
      >
        <img src="../assets/images/icons/chevron-down.svg" alt="Chevron down" />
      </div>
    </div>
    <div
      class="header__dropdown-content"
      :class="{
        'header__dropdown-content_active': isDropdownOpened
      }"
    >
      <div class="header__dropdown-items">
        <div class="header__dropdown-line"></div>
        <div class="header__dropdown-item"><span>esp</span></div>
        <div class="header__dropdown-item"><span>rus</span></div>
      </div>
    </div>
  </div>
</template>
