<script setup>
import './project-hero.scss';

defineProps(['project']);
</script>

<template>
  <section class="project-hero">
    <div class="project-hero__container">
      <div class="project-hero__content">
        <img class="project-hero__logo" :src="project.logo" alt="Project logo" />
        <h2 class="project-hero__title" text-split letters-fade-in>
          {{ project.title }}
        </h2>
        <a class="project-hero__link" :href="project.link" target="_blank">
          <span class="project-hero__link-text">Green Evolution Technologies.com</span>
          <img class="project-hero__icon" src="../../assets/icons/arrow-up-right.svg" alt="Arrow" />
        </a>
      </div>
      <img class="project-hero__image" :src="project.image" alt="Project image" />
    </div>
  </section>
</template>
