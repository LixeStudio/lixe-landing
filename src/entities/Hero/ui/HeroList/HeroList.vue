<script setup>
import './hero-list.scss';
</script>

<template>
  <ul class="hero__list">
    <li class="hero__list-item">{{ $t('translation.hero.list.first') }}</li>
    <li class="hero__list-item">{{ $t('translation.hero.list.second') }}</li>
    <li class="hero__list-item">{{ $t('translation.hero.list.third') }}</li>
  </ul>
</template>
