<script setup>
import './portfolio-section.scss';
import { projects } from '../constants/projects';
import { PortfolioControls } from '@/features/ShowProjects';
</script>

<template>
  <section class="portfolio">
    <div class="portfolio__container">
      <h2 class="portfolio__title">See Our Projects</h2>
      <PortfolioControls :projects="projects" />
    </div>
  </section>
</template>
