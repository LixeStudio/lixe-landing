<script setup>
import '../assets/scss/components/header.scss';
import ButtonPrimary from './ButtonPrimary.vue';
import HeaderDropdown from './HeaderDropdown.vue';
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__left-part">
        <img src="../assets/images/icons/logo.svg" alt="Lixe logo" />
      </div>
      <div class="header__right-part">
        <HeaderDropdown />
        <ButtonPrimary />
      </div>
    </div>
  </header>
</template>
