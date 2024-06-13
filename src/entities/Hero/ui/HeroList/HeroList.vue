<script setup>
import './hero-list.scss';
</script>

<template>
  <ul class="hero__list" v-motion-slide-visible-once-right :delay="1200">
    <li class="hero__list-item">{{ $t('translation.hero.list.first') }}</li>
    <li class="hero__list-item">{{ $t('translation.hero.list.second') }}</li>
    <li class="hero__list-item">{{ $t('translation.hero.list.third') }}</li>
  </ul>
</template>
