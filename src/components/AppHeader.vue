<script setup>
import '../assets/scss/components/header.scss';
import ButtonPrimary from '../components/ButtonPrimary.vue';
import HeaderDropdown from '../components/HeaderDropdown.vue';
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__left-part">
        <img src="../assets/images/icons/logo.svg" alt="Lixe logo" />
      </div>
      <div class="header__right-part">
        <HeaderDropdown />
        <div class="header__button-wrapper">
          <ButtonPrimary />
        </div>
      </div>
    </div>
  </header>
</template>
