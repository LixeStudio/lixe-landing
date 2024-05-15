<script setup>
import { ref } from 'vue';
import '../assets/scss/components/header-dropdown.scss';

const isDropdownOpened = ref(false);
</script>

<template>
  <div class="header__dropdown">
    <div class="header__dropdown-container">
      <div class="header__dropdown-button" @click="isDropdownOpened = !isDropdownOpened">
        <div
          class="header__dropdown-item header__dropdown-item_active"
          :class="{
            'header__icon-rotate': isDropdownOpened
          }"
        >
          <span>eng</span>
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
  </div>
</template>
