<script setup>
import '../assets/scss/components/hero.scss';
import ButtonWithArrow from './ButtonWithArrow.vue';
import HeroVideo from './HeroVideo.vue';
import HeroList from './HeroList.vue';
</script>

<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">Your Digital Journey Starts Here</h1>
        <div class="hero__details">
          <p class="hero__paragraph">
            Thank you for visiting our website! We’re currently in the process of crafting something
            special. While we’re working behind the scenes to bring you an exceptional online
            experience, we invite you to explore our portfolio. Stay tuned for updates, and thank
            you for your patience!
          </p>
          <ButtonWithArrow />
        </div>
      </div>
      <div class="hero__box">
        <HeroVideo />
        <HeroList />
      </div>
    </div>
  </section>
</template>
