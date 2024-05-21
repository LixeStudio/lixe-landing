<script setup>
import './project-hero.scss';

defineProps(['project']);
</script>

<template>
  <section class="project-hero">
    <div class="project-hero__container">
      <div class="project-hero__content">
        <img class="project-hero__logo" :src="project.logo" alt="Project logo" />
        <h2 class="project-hero__title">{{ project.title }}</h2>
        <a :href="project.link" target="_blank">Green Evolution Technologies.com </a>
      </div>
      <img class="project-hero__image" :src="project.modalImage" alt="Project image" />
    </div>
  </section>
</template>
