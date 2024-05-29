<script setup>
import './project-hero.scss';

defineProps(['project']);
</script>

<template>
  <section class="project-hero">
    <div class="project-hero__container">
      <div class="project-hero__content">
        <img class="project-hero__logo" :src="project.logo" alt="Project logo" />
        <div class="project-hero__title-wrapper">
          <h2
            class="project-hero__title"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 500,
                delay: 300
              }
            }"
          >
            {{ project.title }}
          </h2>
        </div>
        <a class="project-hero__link" :href="project.link" target="_blank">
          <span class="project-hero__link-text">Green Evolution Technologies.com</span>
          <img class="project-hero__icon" src="../../assets/icons/arrow-up-right.svg" alt="Arrow" />
        </a>
      </div>
      <img class="project-hero__image" :src="project.modalImage" alt="Project image" />
    </div>
  </section>
</template>
